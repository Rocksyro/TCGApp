const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");

app.listen( PORT , () => {
    console.log('listening on port ' + PORT);
});

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send('Welcome to my app')
});