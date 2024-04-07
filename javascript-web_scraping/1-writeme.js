#!/usr/bin/node
const fs = require("fs");

const FILE_PATH = PROCESS.ARGV[2];
const STRING_TO_WRITE = PROCESS.ARGV[3];

if (!FILE_PATH || !STRING_TO_WRITE) {
    console.log("Error: devuelve una ruta válida");
    process.exit(1);
}
fs.writeFile(FILE_PATH, STRING_TO_WRITE, "utf-8", (err) => {
    if (err) {
        console.log(err);
    }
});