#!/bin/bash

SSH_TARGET="droplet"
BUILD_COMMAND="pnpm run build"
LOCAL_BUILD_DIR="dist"
REMOTE_WEB_ROOT="/var/www/grishmadhakal.com.np/html"

echo "Starting build..."
if ! $BUILD_COMMAND; then
    echo "ERROR: Build failed."
    exit 1
fi
if [ ! -d "$LOCAL_BUILD_DIR" ]; then
    echo "ERROR: Local build directory '$LOCAL_BUILD_DIR' not found."
    exit 1
fi
echo "Build complete."

echo "Starting transfer..."
if ! scp -r -q "$LOCAL_BUILD_DIR"/* "$SSH_TARGET":"$REMOTE_WEB_ROOT"; then
    echo "ERROR: SCP transfer failed."
    exit 1
fi
echo "Transfer complete."

echo "Fixing permissions..."
SSH_COMMAND="sudo chown -R www-data:www-data $REMOTE_WEB_ROOT || true"
if ! ssh "$SSH_TARGET" "$SSH_COMMAND"; then
    echo "WARNING: Remote permissions command failed. Check server permissions manually."
fi

echo "Deployment finished."
