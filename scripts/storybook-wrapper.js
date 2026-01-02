#!/usr/bin/env node
/**
 * Robust Storybook wrapper that handles xdg-open errors gracefully
 * Keeps the HTTP server alive by managing the process lifecycle properly
 */

const { spawn } = require('child_process');
const readline = require('readline');

let currentProcess = null;
let isRestarting = false;

function startStorybook() {
  if (isRestarting) {
    console.log('[Wrapper] Already restarting, skipping...');
    return;
  }

  console.log('[Wrapper] Starting Storybook...');
  isRestarting = false;

  currentProcess = spawn('npm', ['run', 'storybook'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
    detached: false,
  });

  let storybookStarted = false;

  // Monitor stdout for success message
  if (currentProcess.stdout) {
    const stdoutInterface = readline.createInterface({
      input: currentProcess.stdout,
      terminal: false,
    });

    stdoutInterface.on('line', (line) => {
      // Suppress xdg-open errors only
      const isXdgError =
        line.includes('xdg-open') || 
        line.includes('spawn xdg-open') ||
        line.includes('Error: spawn') ||
        (line.includes('at ChildProcess') && !line.includes('info'));

      if (!isXdgError) {
        console.log(line);
      }

      // Track when Storybook successfully starts
      if (line.includes('Storybook') && line.includes('started')) {
        storybookStarted = true;
        console.log('[Wrapper] ✓ Storybook is running successfully');
      }
    });
  }

  // Monitor stderr
  if (currentProcess.stderr) {
    const stderrInterface = readline.createInterface({
      input: currentProcess.stderr,
      terminal: false,
    });

    stderrInterface.on('line', (line) => {
      const isXdgError =
        line.includes('xdg-open') ||
        line.includes('spawn xdg-open') ||
        line.includes('Emitted') ||
        line.includes('at ');

      if (!isXdgError) {
        console.error(line);
      }
    });
  }

  // Handle process exit - restart but with a delay
  currentProcess.on('exit', (code) => {
    if (code !== 0 && !isRestarting) {
      console.log('[Wrapper] Storybook process exited, restarting in 3 seconds...');
      isRestarting = true;
      setTimeout(() => {
        startStorybook();
      }, 3000);
    }
  });

  currentProcess.on('error', (err) => {
    console.error(`[Wrapper] Process error: ${err.message}`);
    if (!isRestarting) {
      isRestarting = true;
      setTimeout(() => {
        startStorybook();
      }, 3000);
    }
  });
}

// Start Storybook
startStorybook();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('[Wrapper] Received SIGINT, shutting down...');
  if (currentProcess) {
    currentProcess.kill();
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('[Wrapper] Received SIGTERM, shutting down...');
  if (currentProcess) {
    currentProcess.kill();
  }
  process.exit(0);
});

// Keep the process alive
setInterval(() => {
  if (!currentProcess || currentProcess.killed) {
    console.log('[Wrapper] Storybook process died, restarting...');
    startStorybook();
  }
}, 5000);
