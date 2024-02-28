// npm init
// npm init --yes


// npm install express
// npm i express

const express = require('express');

const app = express();

app.get('/fatorial', (req, res) => {
    res.send('FATORIAL');
});

app.get('/home', (req, res) => {
    res.send('HOME');
});

app.listen(3000);