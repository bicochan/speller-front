#!/bin/bash

# Exit on error
set -e

LOG_FILE="/home/nara/speller-front/deploy.log"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

log_cmd() {
  echo "[${TIMESTAMP}] Running: $1" >> "${LOG_FILE}"
  OUTPUT=$(eval "$1" 2>&1) || {
    EXIT_CODE=$?
    echo "[${TIMESTAMP}] ERROR (Exit code: ${EXIT_CODE}): Command failed" >> "${LOG_FILE}"
    echo "${OUTPUT}" >> "${LOG_FILE}"
    echo "[${TIMESTAMP}] ERROR: $1 failed with exit code ${EXIT_CODE}" >&2
    echo "${OUTPUT}" >&2
    return ${EXIT_CODE}
  }
  echo "${OUTPUT}" >> "${LOG_FILE}"
  echo "${OUTPUT}"
}

log() {
  echo "[${TIMESTAMP}] $1" | tee -a "${LOG_FILE}"
}

PROJECT_DIR="/home/nara/speller-front"

log "Deployment started: ${TIMESTAMP}"

# Change to project directory
log "Changing to project directory: ${PROJECT_DIR}"
cd $PROJECT_DIR || {
  log "ERROR: Cannot change to project directory"
  exit 1
}

# Pull latest code
log "Pulling latest code from Git repository"
log_cmd "git pull origin main"

# Install dependencies
log "Installing dependencies with NPM"
log_cmd "npm install"

# Build application
log "Building Next.js application"
log_cmd "npm run build"

# Start or restart with PM2
log "Starting/restarting application with PM2"
if log_cmd "pm2 list" | grep -q "speller-front"; then
  log "Restarting existing PM2 process"
  log_cmd "pm2 restart speller-front" || {
    log "WARNING: PM2 restart failed, attempting to start new process"
    log_cmd "pm2 start npm --name 'speller-front' -- run start"
  }
else
  log "Starting new PM2 process"
  log_cmd "pm2 start npm --name 'speller-front' -- run start"
fi

log "Deployment completed: $(date +"%Y-%m-%d %H:%M:%S")"