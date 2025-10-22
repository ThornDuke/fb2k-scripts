const fs = require('fs');
const path = require('path');

/**
 * Constructs an object containing track and message details.
 *
 * @param {string} title - Track title.
 * @param {string} artist - Track artist.
 * @param {string} album - Track album.
 * @param {string} message - Message to be shown.
 * @returns {Object} Object containing formatted alert parameters.
 */
function asObject(title, artist, album, message) {
  return {
    titolo: title,
    artista: artist,
    album: album,
    messaggio: message
  };
}

/**
 * Goes up the directory hierarchy looking for the specified file. Returns
 * the absolute path to the file or null.
 * 
 * @param {string} filename The name of the file to search for.
 * @returns {string | null} The absolute path to the specified file or null.
 */
function findFolderWithFile(filename) {
  let currentDir = __dirname;

  // Goes up the directory hierarchy until it reaches the root
  // of the filesystem
  while (true) {
    const filePath = path.join(currentDir, filename);

    // Check if the file exists in the current directory
    if (fs.existsSync(filePath)) {
      return currentDir;
    }

    const parentDir = path.dirname(currentDir);

    // If the current directory is the filesystem root, stop the search
    if (parentDir === currentDir) {
      return null;
    }

    currentDir = parentDir;
  }
}

/**
 * Adds a number of days to a date.
 *
 * @param {Date} date - The base date.
 * @param {number} days - Number of days to add.
 * @returns {Date} The new date.
 */
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Adds seconds to a date.
 *
 * @param {Date} date - The base date.
 * @param {number} seconds - Number of seconds to add.
 * @returns {Date} The new date.
 */
function addSeconds(date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
}

/**
 * Escapes backslashes, quotes, and line breaks in a string.
 *
 * @param {string} str - The string to escape.
 * @returns {string} Escaped string.
 */
function escaped(str) {
  const result = str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .trim();
  return result;
}

/**
 * Generates a unique filename based on a given prefix and file extension.
 *
 * The filename is constructed by combining the provided prefix, a timestamp
 * encoded in base 36 (to ensure uniqueness and keep the format compact), and
 * the file extension.
 *
 * @param {string} prefix - The prefix to use as the beginning of the filename.
 * @param {string} extension - The file extension (without the leading dot).
 * @returns {string} The generated filename in the format:
 *    `${prefix}-${timestamp}.${extension}`
 *
 * @example
 * generateFilename('log', 'txt'); // "log-kv9y7x0.txt"
 */
function generateFilename(prefix, extension) {
  return `${prefix}-${Number(Date.now()).toString(36)}.${extension}`
}

module.exports = {
  asObject,
  findFolderWithFile,
  addDays,
  addSeconds,
  escaped,
  generateFilename
}