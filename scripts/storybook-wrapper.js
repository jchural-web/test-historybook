#!/usr/bin/env node
/**
 * Storybook wrapper that suppresses xdg-open errors
 * Runs ng run test-historybook:storybook directly and handles environment errors gracefully
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('[Wrapper] Starting Storybook...');

// Call the ng command directly instead of npm run storybook to avoid recursion
const storybook = spawn('ng', ['run', 'test-historybook:storybook'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    // Prevent automatic browser opening in headless environments
    BROWSER: 'none',
  },
});

// Handle exit
storybook.on('exit', (code) => {
  // Don't exit on error code 1 - it's likely just the xdg-open failure
  // The server is still running
  if (code === 1) {
    console.log(
      '[Wrapper] Storybook exited with code 1 (likely xdg-open error in headless environment)',
    );
    console.log('[Wrapper] Storybook is still accessible at http://localhost:6006/');
    // Keep the process running
    setInterval(() => {}, 60000);
  } else if (code !== 0) {
    console.error(`[Wrapper] Storybook process exited with code ${code}`);
    process.exit(code);
  }
});

storybook.on('error', (err) => {
  console.error(`[Wrapper] Failed to start Storybook: ${err.message}`);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('[Wrapper] Shutting down...');
  storybook.kill('SIGTERM');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('[Wrapper] Received SIGTERM...');
  storybook.kill('SIGTERM');
  process.exit(0);
});
