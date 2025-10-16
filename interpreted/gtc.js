#!/usr/bin/env node
/*
 *    Google Translate Caller
 *
 * Node.js script to send the lyrics of a track to Google Translate
 * and get a translation.
 * 1. an f2k script collects the tags %title%, %artist%, %album% and one of
 * several tags that contain text and passes them as a single parameter to
 * this script;
 * 2. Tags are detected and splitted here
 * 3. if there is no text, it is communicated to the user by opening a page
 * html and the script stops
 * 4. if there is a text it is sent to Google Translate and the page is shown
 * in the browser
 * 
 * Dependencies:
 * The components for Foobar2000 "Open Lyrics" and "Run Services"
 * Open Lyrics must be configured to save to a tag the lyrics found
 * 
 * Author: Thorn Duke
 * Version: 1.1.1
 * Creation Date: 2025-10-15
 */

const { exec, spawn } = require('node:child_process');
const { browseAlert } = require('./helper/browsealert')
const { labels } = require('./helper/labels')

function getAlertParam(title, artist, album, message) {
  return {
    titolo: title,
    artista: artist,
    album: album,
    messaggio: message
  }
}

function getSection(blob, section) {
  const startSection = `<${section}>`;
  const endSection = `</${section}>`;
  const re = new RegExp(startSection + '(.*?)' + endSection, 's');
  const match = blob.match(re)
  const result = match ? match[1] : '';
  return result;
}

function getTagsContent(blob) {
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

const args = process.argv.slice(2);

const fullArgsString = args.join(' ');

const { titolo, artista, album, liriche } = getTagsContent(fullArgsString);

if (!liriche || liriche.trim().length === 0) {
  browseAlert(getAlertParam(titolo, artista, album, labels.html.noLyrics))
  process.exit(1);
}

let lines = liriche.split('\n');

const timestampPattern = /\[[\d]{2}:[\d]{2}\.[\d]{2}\]/g;

const processedLines = lines
  .map(line => line.replaceAll(timestampPattern, '').trim())
  .filter(line => line.length > 0);

if (processedLines.length === 0) {
  browseAlert(getAlertParam(titolo, artista, album, labels.html.noValidLines))
  process.exit(1);
}

if (processedLines[0].toLowerCase() === '[instrumental]') {
  browseAlert(getAlertParam(titolo, artista, album, labels.html.instrumentalTrack))
  process.exit(1);
}

const encodedText = encodeURIComponent(processedLines.join('\n'));

const url = `https://translate.google.com/?hl=it&sl=auto&tl=it&text=${encodedText}&op=translate`;

const command = `start "" "${url}"`;

exec(command, (error) => {
  if (error) {
    console.log(`${labels.errors.browserOpening}: ${error.message}`);
    process.exit(1);
  }
});