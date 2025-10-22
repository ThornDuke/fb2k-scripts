/**
 * Labels and messages used throughout the application for
 * user feedback, error handling, and HTML rendering.
 *
 * This object provides internationalized strings and constant
 * labels used by other modules.
 */
const labels = {
  html: {
    noValidLines: 'No valid lyrics lines found.',
    instrumentalTrack: 'Instrumental track. No lyrics to translate.',
    nonLyricalVocals: 'Track contains non-lyrical vocals only.',
    noLyrics: 'No lyrics available for this track.'
  },
  errors: {
    jsonParsing: 'Error parsing JSON file:',
    browserOpening: 'Could not open browser window',
    notification: 'Could not show HTML notification page',
    projectRootNotFound: "The project root could not be found."
  },
  console: {
    projectRootFound: "Project Root Path:"
  }
};

module.exports = {
  labels
};
