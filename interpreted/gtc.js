#!/usr/bin/env node
/*
 *    Google Translate Caller
 *
 * Node.js script to send the lyrics of a track to Google Translate
 * and get a translation.
 * 1. an f2k script collects the tags %title%, %artist%, %album%
 *    and one of several tags that contain lyrics and passes them
 *    as a single parameter to this script;
 * 2. Tags are detected and splitted here
 * 3. if there are no lyrics, it is communicated to the user by
 *    opening a page html and the script stops
 * 4. if there are lyrics they are sent to Google Translate and the
 *    page is shown in the browser. In order to analyze the
 *    frequency of use of the component, the operation log is saved
 *    in a specific file.
 * 
 * Dependencies:
 * The components for Foobar2000 "Open Lyrics" and "Run Services";
 * Open Lyrics must be configured to save to a tag the lyrics found;
 * This module was developed on Node v22.
 * 
 * Author: Thorn Duke
 * Version: 1.1.1
 * Creation Date: 2025-10-15
 */

const { exec } = require('node:child_process');
const { logToBrowser } = require('./helper/logtobrowser')
const { labels } = require('./helper/labels')
const { logSendingChars } = require('./helper/logsendingchars')
const { splitByTags } = require('./helper/splitbytags')

function getAlertParam(title, artist, album, message) {
  return {
    titolo: title,
    artista: artist,
    album: album,
    messaggio: message
  }
}

function extractLyrics(tags) {
  let hasLyrics = true;

  const { titolo, artista, album, liriche } = splitByTags(tags);

  const timestampPattern = /\[[\d]{2}:[\d]{2}\.[\d]{2}\]/g;

  const processedLines = liriche
    .split('\n')
    .map(line => line.replaceAll(timestampPattern, '').trim())
    .filter(line => line.length > 0);

  if (processedLines.length === 0) {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.noValidLines))
    hasLyrics = false;
  }

  if (processedLines[0].toLowerCase() === '[instrumental]') {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.instrumentalTrack))
    hasLyrics = false;
  }

  if (processedLines[0].toLowerCase() === ('[non-lyrical vocals]')) {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.nonLyricalVocals))
    hasLyrics = false;
  }

  if (
    (
      (processedLines.length <= 2) &&
      (
        (processedLines.join(' ').includes('作曲')) ||
        (processedLines.join(' ').includes('作词')) ||
        (processedLines.join(' ').includes('此歌曲为没有填词的纯音乐')) || (processedLines.join(' ').includes('纯音乐，请欣赏'))
      )
    )
  ) {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.noLyrics))
    hasLyrics = false;
  }

  return hasLyrics ? processedLines : null;
}

function showTranslatedLyrics(lyricsAsTextArray) {
  const encodedLyrics = encodeURIComponent(lyricsAsTextArray.join('\n'));
  const url = `https://translate.google.com/?hl=it&sl=auto&tl=it&text=${encodedLyrics}&op=translate`;
  const command = `start /B "" "${url}"`;
  exec(command, (error) => {
    if (error) {
      console.log(`${labels.errors.browserOpening}: ${error.message}`);
      process.exit(1);
    }
  });
}

const args = process.argv.slice(2);

const lyrics = extractLyrics(args.join(' '))

if (!lyrics) {
  process.exit(1)
} else {
  logSendingChars(args.join(' '))
  showTranslatedLyrics(lyrics)
}