#!/bin/bash
# Storybook wrapper that handles xdg-open errors gracefully
# Keeps Storybook running even if it tries to open a browser

# Create a named pipe (FIFO) to handle output redirection
mkfifo /tmp/storybook-pipe 2>/dev/null || true

# Start Storybook in the background, redirecting errors
{
  npm run storybook 2>&1 | while read line; do
    # Skip the xdg-open error lines
    if [[ ! "$line" =~ "xdg-open" ]] && [[ ! "$line" =~ "spawn" ]] && [[ ! "$line" =~ "ChildProcess" ]]; then
      echo "$line"
    fi
  done
} &

STORYBOOK_PID=$!

# Keep the wrapper running to maintain the parent process
wait $STORYBOOK_PID 2>/dev/null || true

# If Storybook dies, restart it
exec "$0"
