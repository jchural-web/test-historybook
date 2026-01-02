#!/usr/bin/env node
/**
 * Wrapper script to start Storybook and suppress xdg-open errors
 * that occur in headless environments
 */

const { spawn } = require('child_process');
const path = require('path');

// Suppress the "Error: spawn xdg-open ENOENT" by catching it
process.on('uncaughtException', (err) => {
  if (err.code === 'ENOENT' && err.syscall === 'spawn' && err.path === 'xdg-open') {
    // This is expected in headless environments, just suppress it
    // The server is still running fine
    process.exit(0);
  }
  // Re-throw other errors
  throw err;
});

// Run the storybook command
const child = spawn('npm', ['run', 'storybook'], {
  stdio: 'inherit',
  shell: true,
});

child.on('error', (err) => {
  if (err.code === 'ENOENT' && err.syscall === 'spawn' && err.path === 'xdg-open') {
    // Suppress xdg-open errors
    return;
  }
  console.error('Storybook error:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  // Exit with 0 even if there was an xdg-open error
  if (code === 1) {
    process.exit(0);
  } else {
    process.exit(code);
  }
});
