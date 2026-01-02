#!/usr/bin/env node
/**
 * Storybook wrapper that handles xdg-open errors
 * The error happens after Storybook successfully starts, so we suppress it
 */

const { spawn } = require('child_process');
const readline = require('readline');

function startStorybook() {
  console.log('[Wrapper] Starting Storybook...');
  
  const storybook = spawn('npm', ['run', 'storybook'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  // Create readline interface for stdout
  const stdoutInterface = readline.createInterface({
    input: storybook.stdout,
    output: process.stdout,
    terminal: false,
  });

  const stderrInterface = readline.createInterface({
    input: storybook.stderr,
    output: process.stderr,
    terminal: false,
  });

  // Filter and forward stdout
  stdoutInterface.on('line', (line) => {
    // Only suppress xdg-open related errors
    if (!line.includes('xdg-open') && !line.includes('spawn xdg-open')) {
      console.log(line);
    }
  });

  // Filter and forward stderr
  stderrInterface.on('line', (line) => {
    // Only suppress xdg-open related errors
    if (!line.includes('xdg-open') && !line.includes('spawn xdg-open')) {
      console.error(line);
    }
  });

  // Handle process exit
  storybook.on('exit', (code) => {
    // Only log if it wasn't an xdg-open error (exit code 0)
    if (code !== 0 && code !== null) {
      console.error(`[Wrapper] Storybook exited with code ${code}`);
      // Restart Storybook after a delay
      console.log('[Wrapper] Restarting Storybook in 5 seconds...');
      setTimeout(() => startStorybook(), 5000);
    } else {
      console.log('[Wrapper] Storybook exited cleanly');
      // Still keep the wrapper alive
      setTimeout(() => startStorybook(), 2000);
    }
  });

  // Handle errors on the spawn itself
  storybook.on('error', (err) => {
    console.error(`[Wrapper] Failed to start Storybook: ${err.message}`);
    // Restart after a delay
    setTimeout(() => startStorybook(), 5000);
  });
}

// Start Storybook
startStorybook();

// Keep the wrapper alive
process.on('SIGINT', () => {
  console.log('[Wrapper] Received SIGINT, exiting...');
  process.exit(0);
});
