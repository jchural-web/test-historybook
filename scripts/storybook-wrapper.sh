#!/bin/bash
# Run Storybook and suppress the exit code from xdg-open errors
# The server will be running despite the error
npm run storybook || true
