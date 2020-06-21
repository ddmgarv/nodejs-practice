'use strict';
const express = require('express');
const { readFile } = require('fs').promises;
const { multiply } = require('./utils/mathOps');

const app = express();

console.log(process.argv)

console.log(multiply(5, process.argv[2].split('=')[1]))

app.get('/', async (request, response) => {
    console.log('REQUESTING DATA');
    response.send(await readFile('./index.html', 'utf8'));

    // readFile('./index.html', 'utf8', (err, html) => {
    //     if (err) return response.status(500).send('Internal server error.');

    //     return response.send(html);
    // });
});

app.listen(process.env.PORT || 3000, () =>
    console.log('App available on PORT:3000')
);
