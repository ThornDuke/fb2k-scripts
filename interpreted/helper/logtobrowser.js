const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const styles = require('./css_styles');
const { labels } = require('./labels');
const { escaped } = require('./utils')

/**
 * Creates an HTML page as a string using the given message data and style.
 *
 * @param {Object} msg - The message object containing metadata and message.
 * @param {string} msg.titolo - Track title.
 * @param {string} msg.artista - Track artist.
 * @param {string} msg.album - Track album.
 * @param {string} msg.messaggio - Message to show.
 * @param {string} style - CSS style to apply.
 * @returns {string} HTML content as a string.
 */
function createHTMLPage(msg, style) {
  const titolo = escaped(msg.titolo);
  const artista = escaped(msg.artista);
  const album = escaped(msg.album);
  const messaggio = escaped(msg.messaggio);

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Notification</title>
  <style>
    ${style}
  </style>
</head>
<body>
  <div id="container">
    <p class="tag" id="title">Track: <b>${titolo}</b></p>
    <p class="tag" id="artist">Artist: <b>${artista}</b></p>
    <p class="tag" id="album">Album: <b>${album}</b></p>
    <p class="splitter"></p>
    <p id="message">${messaggio}</p>
  </div>
</body>
</html>
`;

  return htmlContent;
}

/**
 * Creates a temporary HTML file with the given message and opens it
 * in the browser.
 * Automatically deletes the file after 5 seconds.
 *
 * @param {Object} msg - Message object (title, artist, album, message).
 */
function logToBrowser(msg) {
  const tempDir = os.tmpdir();
  const tempFile = path.join(tempDir, `notify_${Date.now()}.html`);
  const htmlPage = createHTMLPage(msg, styles.rothkoDark);

  try {
    fs.writeFileSync(tempFile, htmlPage, 'utf8');

    execSync(`start "" "${tempFile}"`, { shell: true });

    setTimeout(() => {
      try {
        fs.unlinkSync(tempFile);
      } catch (e) {
        // Ignore deletion errors
      }
    }, 5000);

  } catch (error) {
    console.error(`${labels.errors.notification}: ${error.message}`);
  }
}

module.exports = {
  logToBrowser
};
