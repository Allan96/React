const express = require('express');

const app = express();

app.use(express.json()); // criar a API
app.use(express.urlencoded({ extended: true})); // permite enviar arquivos nas requisições.

app.use(require('./routes')); // tem que ter o ./ porque se nao ele vai pensar que o routes é uma dependencia do nodemodules

app.listen(3333); // porta do localhost => localhost:porta

