/**
 * Extracts the content of a specific XML-like section from a blob string.
 *
 * @param {string} blob - The string containing tagged sections.
 * @param {string} section - The name of the section to extract (e.g., "title").
 * @returns {string} The content inside the section tags, or an empty string
 *    if not found.
 */
function getSection(blob, section) {
  const startSection = `<${section}>`;
  const endSection = `</${section}>`;
  const re = new RegExp(startSection + '(.*?)' + endSection, 's');
  const match = blob.match(re);
  return match ? match[1] : '';
}

/**
 * Parses a blob containing tagged metadata and lyrics and returns an object.
 *
 * Expected tags: `<title>`, `<artist>`, `<album>`, `<lyrics>`
 *
 * @param {string} blob - The string containing all tags and content.
 * @returns {Object} An object with keys: `titolo`, `artista`, `album`,
 *    `liriche`.
 */
function splitByTags(blob) {
  const titleBunch = getSection(blob, 'title');
  const artistBunch = getSection(blob, 'artist');
  const albumBunch = getSection(blob, 'album');
  const lyricsBunch = getSection(blob, 'lyrics');

  return {
    titolo: titleBunch,
    artista: artistBunch,
    album: albumBunch,
    liriche: lyricsBunch
  };
}

module.exports = {
  splitByTags
};
