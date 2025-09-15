// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/html', (req, res) => {
    res.send('<h1>Ini adalah response HTML</h1>');
});
app.get('/text', (req, res) => {
    res.send('Ini adalah response text.');
});
app.get('/json', (req, res) => {
    res.json({ message: 'Ini adalah response JSON' });
});

//Serving static file

app.use(express.static('public'));

app.listen(port, (req, res) => {
    console.log('Server Running at http://localhost:3000/index.html)
        });

