/* eslint-disable no-console */

import { resolve, sep } from 'path';
import { readdir, writeFile } from 'fs/promises';

import {
  iconsListJSPath,
  iconsListTSPath,
  iconsPath,
} from '../config/commonPaths.mjs';

async function getIcons(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(dirent => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory()
        ? getIcons(res)
        : res?.split(`${sep}icons${sep}`)[1];
    }),
  );
  return Array.prototype.concat(...files);
}

async function processIcons(dir) {
  const files = await getIcons(dir);
  const filesNew = files.map(i => i.replace(/\\/g, '/'));
  const content = `/**
 * List of icon files.
 * This file is autogenerated. Do not edit directly.
 */

const list = ${JSON.stringify(filesNew, null, 2)}

export default list;
`;
  await writeFile(iconsListJSPath, content);
  await writeFile(iconsListTSPath, content);
}

processIcons(iconsPath)
  .then(() => {
    console.log('\x1b[42m%s\x1b[0m', 'Successfully generated icons list');
  })
  .catch(e => {
    console.error('\x1b[41m%s: %s\x1b[0m', 'Failed to process icons', e);
  });
