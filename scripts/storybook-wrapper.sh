#!/bin/bash
# Run Storybook in the background and monitor it
# This ensures the HTTP server stays alive even if xdg-open fails

npm run storybook &
STORYBOOK_PID=$!

# Give Storybook time to fully start and bind to the port
sleep 10

# Keep this script alive to keep the parent process alive
# The Storybook process will continue running in the background
while kill -0 $STORYBOOK_PID 2>/dev/null; do
  sleep 5
done
