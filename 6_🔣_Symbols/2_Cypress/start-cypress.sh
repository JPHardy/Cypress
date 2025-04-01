#!/bin/bash
# This is a bash script that sets up and starts Cypress with a virtual display.

sudo pkill -f Xvfb || true
# Terminates any running Xvfb (X virtual framebuffer) processes. 
# The `|| true` ensures the script continues even if no Xvfb process is running.

sudo rm -f /tmp/.X99-lock
# Removes the lock file for display :99, if it exists, to prevent conflicts.

sudo chown root:root /tmp/.X11-unix
# Ensures the /tmp/.X11-unix directory is owned by the root user and group.

sudo chmod 1777 /tmp/.X11-unix
# Sets the permissions of /tmp/.X11-unix to allow all users to read, write, and execute, 
# while preserving the sticky bit (1), which prevents users from deleting files they don't own.

Xvfb :99 -ac & sleep 2
# Starts the X virtual framebuffer on display :99 with access control disabled (`-ac`).
# Runs it in the background (`&`) and waits for 2 seconds to ensure it starts properly.

export DISPLAY=:99
# Sets the DISPLAY environment variable to :99, so graphical applications use the virtual display.

DEBUG=cypress:* npx cypress open
# Sets the DEBUG environment variable to enable Cypress debug logs.
# Runs Cypress in interactive mode using `npx cypress open`.