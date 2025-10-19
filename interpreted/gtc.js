#!/usr/bin/env node
/*
 *    Google Translate Caller
 *
 * Node.js script to send the lyrics of a track to Google Translate
 * and get a translation.
 *
 * Author: Thorn Duke
 * Version: 1.1.1
 * Creation Date: 2025-10-15
 */

const { exec } = require('node:child_process');
const { logToBrowser } = require('./helper/logtobrowser');
const { labels } = require('./helper/labels');
const { logSendingChars } = require('./helper/logsendingchars');
const { splitByTags } = require('./helper/splitbytags');

/**
 * Constructs an object containing track and message details.
 *
 * @param {string} title - Track title.
 * @param {string} artist - Track artist.
 * @param {string} album - Track album.
 * @param {string} message - Message to be shown.
 * @returns {Object} Object containing formatted alert parameters.
 */
function getAlertParam(title, artist, album, message) {
  return {
    titolo: title,
    artista: artist,
    album: album,
    messaggio: message
  };
}

/**
 * Extracts and cleans lyrics from tagged input string.
 *
 * @param {string} tags - Combined string of tags and lyrics.
 * @returns {string[]|null} Processed lines or null if no valid lyrics.
 */
function extractLyrics(tags) {
  let hasLyrics = true;
  const { titolo, artista, album, liriche } = splitByTags(tags);
  const timestampPattern = /\[[\d]{2}:[\d]{2}\.[\d]{2}\]/g;

  const processedLines = liriche
    .split('\n')
    .map(line => line.replaceAll(timestampPattern, '').trim())
    .filter(line => line.length > 0);

  if (processedLines.length === 0) {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.noValidLines));
    hasLyrics = false;
  }

  if (processedLines[0].toLowerCase() === '[instrumental]') {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.instrumentalTrack));
    hasLyrics = false;
  }

  if (processedLines[0].toLowerCase() === '[non-lyrical vocals]') {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.nonLyricalVocals));
    hasLyrics = false;
  }

  if (
    processedLines.length <= 2 &&
    (
      processedLines.join(' ').includes('作曲') ||
      processedLines.join(' ').includes('作词') ||
      processedLines.join(' ').includes('此歌曲为没有填词的纯音乐') ||
      processedLines.join(' ').includes('纯音乐，请欣赏')
    )
  ) {
    logToBrowser(getAlertParam(titolo, artista, album, labels.html.noLyrics));
    hasLyrics = false;
  }

  return hasLyrics ? processedLines : null;
}

/**
 * Opens the lyrics in Google Translate in a browser tab.
 *
 * @param {string[]} lyricsAsTextArray - The lyrics lines to translate.
 */
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
const lyrics = extractLyrics(args.join(' '));

if (!lyrics) {
  process.exit(1);
} else {
  logSendingChars(args.join(' '));
  showTranslatedLyrics(lyrics);
}
