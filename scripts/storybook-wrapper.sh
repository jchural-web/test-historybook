#!/bin/bash
# Simple wrapper that runs Storybook and filters out xdg-open errors
# The error happens after Storybook successfully starts, so we just suppress it

npm run storybook 2>&1 | grep -v "xdg-open" | grep -v "spawn" | grep -v "ChildProcess" | grep -v "Error:" | grep -v "^    at " | grep -v "Emitted 'error' event"
