#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

// Realizar una solicitud GET al URL
request.get(url, (error, response) => {
  if (error) {
    // Manejar errores de solicitud
    console.error('Error:', error);
  } else {
    // Imprimir el código de estado de la respuesta
    console.log(`code: ${response.statusCode}`);
  }
});

