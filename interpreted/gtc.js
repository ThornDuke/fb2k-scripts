#!/usr/bin/env node
/**
 *    Google Translate Caller
 *
 * @description
 * Node.js script to send the lyrics of a track to Google Translate
 * and get a translation.
 *
 * @author Thorn Duke
 * @version 1.1.4
 * @since 2025-10-15
 */

const { exec } = require('node:child_process');
const { logToBrowser } = require('./helper/logtobrowser');
const { labels } = require('./helper/labels');
const { logSendingChars } = require('./helper/logsendingchars');
const { splitByTags } = require('./helper/splitbytags');
const { asObject } = require('./helper/utils')

/**
 * Validates whether the processed lyrics are suitable for display.
 *
 * This function performs several checks to determine if the lyrics
 * contain meaningful textual content. It detects instrumental tracks,
 * non-lyrical vocals, and other patterns indicating the absence of
 * actual lyrics. If the lyrics are deemed invalid, a notification with
 * an appropriate message is sent to the browser.
 *
 * @param {string[]} processedLines - An array of processed lyric lines
 *    (cleaned of timestamps and empty lines).
 * @param {string} title - Track title.
 * @param {string} artist - Track artist.
 * @param {string} album - Track album.
 * @returns {boolean} Returns `true` if the lyrics are valid, otherwise `false`.
 */
function isValidLyrics(processedLines, titolo, artista, album) {
  if (processedLines.length === 0) {
    logToBrowser(asObject(titolo, artista, album, labels.html.noValidLines));
    return false;
  }

  const firstLine = processedLines[0].toLowerCase();
  if (firstLine === '[instrumental]') {
    logToBrowser(asObject(titolo, artista, album, labels.html.instrumentalTrack));
    return false;
  }

  if (firstLine === '[non-lyrical vocals]') {
    logToBrowser(asObject(titolo, artista, album, labels.html.nonLyricalVocals));
    return false;
  }

  const joinedLines = processedLines.join(' ');

  if (
    processedLines.length <= 4 &&
    (
      joinedLines.includes('作曲') ||
      joinedLines.includes('作词') ||
      joinedLines.includes('此歌曲为没有填词的纯音乐') ||
      joinedLines.includes('纯音乐，请欣赏') ||
      joinedLines.includes('制作人') ||
      joinedLines.includes('人声')
    )
  ) {
    logToBrowser(asObject(titolo, artista, album, labels.html.noLyrics));
    return false;
  }

  return true;
}

/**
 * Extracts and cleans lyrics from tagged input string.
 *
 * @param {string} tags - Combined string of tags and lyrics.
 * @returns {string[]|null} Processed lines or null if no valid lyrics.
 */
function extractLyrics(tags) {
  const { titolo, artista, album, liriche } = splitByTags(tags);
  const timestampPattern = /\[[\d]{2}:[\d]{2}\.[\d]{2}\]/g;

  const processedLines = liriche
    .split('\n')
    .map(line => line.replaceAll(timestampPattern, '').trim())
    .filter(line => line.length > 0);

  const hasLyrics = isValidLyrics(processedLines, titolo, artista, album);

  if (hasLyrics) {
    if (titolo) {
      processedLines.unshift(titolo, "");
    }
    return processedLines;
  }

  return null;
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
