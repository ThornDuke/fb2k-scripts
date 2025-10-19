const fs = require('fs');
const path = require('path');

// Generate a unique filename using base-36 timestamp
const filename = `gtl-${Number(Date.now()).toString(36)}.log`;

// Path to the log file in the current script's directory
const LOG_FILE = path.join(path.dirname(process.argv[1]), filename);

/**
 * Appends a message to a log file with a timestamp.
 *
 * If the log file does not exist, it is created automatically.
 *
 * @param {string} message - The message to write to the log.
 */
function logToFile(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  try {
    fs.appendFileSync(LOG_FILE, logMessage);
  } catch (err) {
    console.error(`Critical error writing to log file (${LOG_FILE}): ${err.message}`);
  }
}

module.exports = {
  logToFile
};
