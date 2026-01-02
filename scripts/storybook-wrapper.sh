#!/bin/bash
# Wrapper to run Storybook in a headless environment
# Suppresses the xdg-open ENOENT error that occurs after successful startup

# Run Storybook and pipe stderr to suppress xdg-open related errors
npm run storybook 2>&1 | awk '!/spawn xdg-open|Error:|at ChildProcess/ || /Storybook.*started/ { print }'

# Exit gracefully
exit 0
