cd /workspaces/Cypress/6_🔣_Symbols/2_Cypress/ && \
sudo pkill -f Xvfb || true && \
sudo rm -f /tmp/.X99-lock || true && \
sudo chown root:root /tmp/.X11-unix || true && \
sudo chmod 1777 /tmp/.X11-unix || true && \
Xvfb :99 -ac & sleep 2 && \
export DISPLAY=:99 && \
PORT=44067 npm start & sleep 2 && \
DEBUG=cypress:* npx cypress open --browser electron --config baseUrl=https://verbose-guacamole-6w5jqx7v65cgjq-44067.app.github.dev