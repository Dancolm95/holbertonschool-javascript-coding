#!/usr/bin/node

const fs = require('fs');

const FILE_PATH = process.ARGV[2];

const DATA_TO_WRITE = process.ARGV[3];

if (!FILE_PATH) {
  console.log('Error: La ruta proporionada no es valida.');
  process.exit(1);
}

fs.writeFile(FILE_PATH, STRING_TO_WRITE, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
});
