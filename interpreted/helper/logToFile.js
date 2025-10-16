const fs = require('fs');
const path = require('path');

const filename = `gtl-${Number(Date.now()).toString(36)}.log`

// Definisce il percorso del file di log nella stessa directory dello script
const LOG_FILE = path.join(path.dirname(process.argv[1]), filename);

/**
 * Funzione per scrivere un messaggio sul file di log
 * @param {string} message Il messaggio da scrivere.
 */
function logToFile(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  // Scrive su file, aggiungendo (append) il contenuto
  try {
    fs.appendFileSync(LOG_FILE, logMessage);
  } catch (err) {
    console.error(`Errore critico nella scrittura del file di log (${LOG_FILE}): ${err.message}`);
  }
}

module.exports = {
  logToFile
}