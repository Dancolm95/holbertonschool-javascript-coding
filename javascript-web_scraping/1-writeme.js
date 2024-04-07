#!/usr/bin/node
const fs = require('fs');

const FILE_PATH = PROCESS.ARGV[2];

const DATATOWRITE = PROCESS.ARGV[3];

fs.writeFile(FILE_PATH, DATATOWRITE, 'utf-8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
});