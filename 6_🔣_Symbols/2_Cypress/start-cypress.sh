#!/bin/bash
sudo pkill -f Xvfb || true
sudo rm -f /tmp/.X99-lock
sudo chown root:root /tmp/.X11-unix
sudo chmod 1777 /tmp/.X11-unix
Xvfb :99 -ac & sleep 2
export DISPLAY=:99
npx cypress open