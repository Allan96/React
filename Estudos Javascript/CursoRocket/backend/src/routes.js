const express = require('express');

const routes = express.Router();

routes.get('/teste', (req, res) => { //req => requisição // res => resposta
    return res.send('Hello');
})

module.exports = routes; // exportar routes


//MONGO DB

