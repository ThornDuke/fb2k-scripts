const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const styles = require('./css_styles');
const { labels } = require('./labels');

function escaped(str) {
  const result = str
    .replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
    .trim();
  return result;
}

function createHTMLPage(msg, style) {
  const titolo = escaped(msg.titolo);
  const artista = escaped(msg.artista);
  const album = escaped(msg.album);
  const messaggio = escaped(msg.messaggio)

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

function browseAlert(msg) {
  const tempDir = os.tmpdir();
  const tempFile = path.join(tempDir, `notify_${Date.now()}.html`);
  const htmlPage = createHTMLPage(msg, styles.rothkoDarkStyle)

  try {
    fs.writeFileSync(tempFile, htmlPage, 'utf8');

    execSync(`start "" "${tempFile}"`, { shell: true });

    setTimeout(() => {
      try {
        fs.unlinkSync(tempFile);
      } catch (e) {
        // Ignora errori di cancellazione
      }
    }, 5000);

  } catch (error) {
    console.error(`${labels.errors.notification}: ${error.message}`);
  }
}

module.exports = {
  browseAlert
}