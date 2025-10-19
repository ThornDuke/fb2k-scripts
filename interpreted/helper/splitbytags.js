function getSection(blob, section) {
  const startSection = `<${section}>`;
  const endSection = `</${section}>`;
  const re = new RegExp(startSection + '(.*?)' + endSection, 's');
  const match = blob.match(re)
  const result = match ? match[1] : '';
  return result;
}

function splitByTags(blob) {
  const titleBunch = getSection(blob, 'title')
  const artistBunch = getSection(blob, 'artist')
  const albumBunch = getSection(blob, 'album')
  const lyricsBunch = getSection(blob, 'lyrics')

  const result = {
    titolo: titleBunch,
    artista: artistBunch,
    album: albumBunch,
    liriche: lyricsBunch
  }

  return result
}

module.exports = {
  splitByTags
}