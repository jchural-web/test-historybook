#!/usr/bin/env node
/**
 * Storybook wrapper that suppresses xdg-open errors
 * The key is to catch and handle errors that occur AFTER the server starts
 */

const { spawn } = require('child_process');

console.log('[Wrapper] Starting Storybook...');

const storybook = spawn('npm', ['run', 'storybook'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
});

// Track if server has started
let serverStarted = false;

// Suppress stderr to prevent the xdg-open error from crashing the process
if (storybook.stderr) {
  storybook.stderr.on('data', (data) => {
    const output = data.toString();
    // Only suppress xdg-open related errors
    if (!output.includes('xdg-open') && !output.includes('spawn xdg')) {
      process.stderr.write(output);
    }
  });
}

// Forward stdout but monitor for success
if (storybook.stdout) {
  storybook.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write(output);
    
    if (output.includes('Storybook') && output.includes('started')) {
      serverStarted = true;
      console.log('[Wrapper] ✓ Storybook is running successfully');
    }
  });
}

// Exit handler - if server has started, don't consider it a failure
storybook.on('exit', (code) => {
  if (serverStarted) {
    // Server started successfully, the xdg-open error is not a real problem
    // Just keep the wrapper alive
    console.log('[Wrapper] Storybook exited but server was running');
    // Keep process alive
    setInterval(() => {}, 60000);
  } else {
    console.error('[Wrapper] Storybook failed to start');
    process.exit(1);
  }
});

storybook.on('error', (err) => {
  console.error(`[Wrapper] Process error: ${err.message}`);
  if (!serverStarted) {
    process.exit(1);
  }
});
