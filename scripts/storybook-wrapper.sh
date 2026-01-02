#!/bin/bash
# Wrapper script to run Storybook and suppress the xdg-open error
npm run storybook 2>&1 || true
