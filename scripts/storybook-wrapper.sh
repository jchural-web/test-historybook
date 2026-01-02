#!/bin/bash
# Use nohup to completely detach Storybook from the shell
# This prevents the process from receiving SIGHUP and ensures it stays alive

nohup npm run storybook >/dev/null 2>&1 &

# Keep this wrapper alive by sleeping forever
# The nohup process will continue running independently
sleep infinity
