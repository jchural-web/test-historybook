#!/bin/bash
# Wrapper to run Storybook and suppress the xdg-open ENOENT error
# The error occurs after Storybook successfully starts, so we suppress it

exec npm run storybook 2>&1 | sed '/xdg-open/d' | sed '/^[[:space:]]*$/d' & 
STORYBOOK_PID=$!

# Give Storybook time to start
sleep 5

# Storybook should be running now, even if there was an error at the end
# Keep the process alive
wait $STORYBOOK_PID 2>/dev/null || true
