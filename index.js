const express = require('express');

const app = express();

app.get('/', (request, response) => {
  console.log('REQUESTING DATA');
});
