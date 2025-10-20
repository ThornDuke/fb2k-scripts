# Google Translate Caller

A Node.js script to automatically send the lyrics of a music track to
**Google Translate** for instant translation and display in a browser.

Originally built for use with [Foobar2000](https://www.foobar2000.org/) and its
components like **Open Lyrics** and **Run Services**.

## Features

- Parses track metadata and lyrics from a custom tagged string.
- Filters out instrumental or non-lyrical tracks.
- Opens Google Translate in the browser with the lyrics preloaded.
- Logs usage stats (number of characters, track info) into a structured
  JSON file.
- Notifies the user via a temporary HTML page when lyrics are missing.

## Requirements

- **Node.js** ≥ v22  
- Windows OS (uses `start` command to open browser)
- Foobar2000, with the components
  - Run Services
  - Open Lyrics

> Make sure "Open Lyrics" in Foobar2000 is configured to save lyrics into a tag.

## Project Structure

```text
interpreted/
│
├── helper/
│ ├── chars_log.json      # Generated at runtime for character logs
│ ├── css_styles.js       # CSS styles for notification HTML
│ ├── labels.js           # User messages and error labels
│ ├── logtobrowser.js     # Displays HTML message in browser
│ ├── logsendingchars.js  # Logs usage data into a JSON file
│ ├── logtofile.js        # Optional: logs raw messages to a text file
│ └── splitbytags.js      # Parses title/artist/album/lyrics from blob
│
└── gtc.js                # Entry script (the one Foobar2000 calls)
```

## Development Notes

Designed for Windows environments.

Translation is opened via the start command.

All browser and file operations are handled asynchronously and safely.

## License

MIT License
