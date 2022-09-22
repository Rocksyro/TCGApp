const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");
// const fetch = require("node-fetch");
const pokemon = require ('pokemontcgsdk');

app.listen( PORT , () => {
    console.log('listening on port ' + PORT);
});

app.use(express.static(path.resolve(__dirname, '../public')));

pokemon.configure({apiKey: '6e705804-2537-4c0a-b668-c2ba4008762f'})

app.get('/', (req, res) => {
    res.send('Welcome to my app')
});


pokemon.card.find('base1-4')
.then(card => {
    console.log(card.name) // "Charizard"
})