const fs = require('fs');
const path = require('path');
const { labels } = require('./labels');
const { splitByTags } = require('./splitbytags');
const { findFolderWithFile, addDays, addSeconds, rot13 } = require('./utils')

/**
 * Logs the number of characters in the lyrics of a track into a monthly
 * log file.
 *
 * @param {string} blob - The full input string containing metadata and lyrics.
 */
function logSendingChars(blob) {
  const logFileName = 'chars_log.json';
  const now = new Date();
  const entry = splitByTags(blob);
  const lyricsCharsQty = entry.liriche.length;

  const projectRoot = findFolderWithFile('gtc.js');
  if (projectRoot) {
    console.log(labels.console.projectRootFound, projectRoot);
  } else {
    console.log(labels.errors.projectRootNotFound);
  }
  const LOG_FILE_PATH = path.join(projectRoot, logFileName);

  let logData = [];
  if (fs.existsSync(LOG_FILE_PATH)) {
    const fileContent = fs.readFileSync(LOG_FILE_PATH, 'utf8');
    try {
      logData = JSON.parse(fileContent);
    } catch (err) {
      console.error(labels.errors.jsonParsing, err);
    }
  }

  // Find a log block that includes "now"
  let currentMonthLog = logData.find(log => {
    const start = new Date(log.startmonth);
    const end = new Date(log.endmonth);
    return now >= start && now <= end;
  });

  // Format current datetime like so:
  // yyyy-mm-dd hh-mm-ss
  currDateTime = now.toISOString();
  datetime = `${currDateTime.split('T')[0]} ${currDateTime.split('T')[1].split('.')[0]}`;
  // An ID very strange
  trackId = rot13(Date.now().toString(16));
  const newLogEntry = {
    id: trackId,
    datetime,
    track: entry.titolo,
    artist: entry.artista,
    album: entry.album,
    lyricsCharsQty
  };

  if (currentMonthLog) {
    const totalCalls = currentMonthLog.log.length + 1;
    currentMonthLog.log.push(newLogEntry);
    currentMonthLog.totalChars += lyricsCharsQty;
    currentMonthLog.totalCalls = totalCalls;
    currentMonthLog.log.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  } else {
    // Create a new block
    const lastBlock = logData.length > 0
      ? logData.reduce((latest, block) =>
        new Date(block.endmonth) > new Date(latest.endmonth) ? block : latest
      )
      : null;
    const startDate = lastBlock
      ? addSeconds(new Date(lastBlock.endmonth), 1)
      : now;
    const endDate = addDays(startDate, 30);
    const startmonth = startDate.toISOString();
    const endmonth = endDate.toISOString();
    const monthId = `${Date.now().toString(36)}`;

    currentMonthLog = {
      id: monthId,
      startmonth,
      endmonth,
      log: [newLogEntry],
      totalChars: lyricsCharsQty,
      totalCalls: 1
    };

    logData.push(currentMonthLog);
  }

  // Sort log blocks by start date
  logData.sort((a, b) => new Date(a.startmonth) - new Date(b.startmonth));

  fs.writeFileSync(LOG_FILE_PATH, JSON.stringify(logData, null, 2), 'utf8');
}

module.exports = {
  logSendingChars
};
