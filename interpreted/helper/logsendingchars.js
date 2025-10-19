const fs = require('fs');
const path = require('path');
const { labels } = require('./labels');
const { splitByTags } = require('./splitbytags');

const LOG_FILE_PATH = path.join(__dirname, 'chars_log.json');

// Aggiunge un certo numero di giorni a una data
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Aggiunge un secondo a una data
function addSeconds(date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
}

function logSendingChars(blob) {
  const now = new Date();
  const entry = splitByTags(blob);
  const lyricsCharsQty = entry.liriche.length;

  let logData = [];
  if (fs.existsSync(LOG_FILE_PATH)) {
    const fileContent = fs.readFileSync(LOG_FILE_PATH, 'utf8');
    try {
      logData = JSON.parse(fileContent);
    } catch (err) {
      console.error(labels.errors.jsonParsing, err);
    }
  }

  // Trova un blocco esistente che contiene `now`
  let currentMonthLog = logData.find(log => {
    const start = new Date(log.startmonth);
    const end = new Date(log.endmonth);
    return now >= start && now <= end;
  });

  const newLogEntry = {
    datetime: now.toISOString(),
    track: entry.titolo,
    artist: entry.artista,
    album: entry.album,
    lyricsCharsQty
  };

  if (currentMonthLog) {
    currentMonthLog.log.push(newLogEntry);
    currentMonthLog.totalChars += lyricsCharsQty;
    currentMonthLog.log.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  } else {
    // Nessun blocco contiene `now` → creare un nuovo blocco
    // Calcola lo startmonth come endmonth + 1s del blocco più recente
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

    // ID univoco basato sul datestamp
    const monthId = `${Date.now().toString(26)}`;

    currentMonthLog = {
      id: monthId,
      startmonth,
      endmonth,
      log: [newLogEntry],
      totalChars: lyricsCharsQty
    };

    logData.push(currentMonthLog);
  }

  // Ordina tutti i blocchi per startmonth
  logData.sort((a, b) => new Date(a.startmonth) - new Date(b.startmonth));

  fs.writeFileSync(LOG_FILE_PATH, JSON.stringify(logData, null, 2), 'utf8');
}

module.exports = {
  logSendingChars
};
