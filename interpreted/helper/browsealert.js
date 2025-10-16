const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { bauhausStyle } = require('./css_styles');
const { labels } = require('./labels');

function escaped(str) {
  const result = str
    .replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
    .trim();
  return result;
}

function browseAlert(msg) {
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
    ${bauhausStyle}
  </style>
</head>
<body>
  <div>
    <p>Track: <b>${titolo}</b></p>
    <p>Artist: <b>${artista}</b></p>
    <p>Album: <b>${album}</b></p>
    <p></p>
    <p>${messaggio}</p>
  </div>
</body>
</html>
`;

  const tempDir = os.tmpdir();
  const tempFile = path.join(tempDir, `notify_${Date.now()}.html`);

  try {
    fs.writeFileSync(tempFile, htmlContent, 'utf8');

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