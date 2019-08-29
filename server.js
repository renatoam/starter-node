// Executamos o node no terminal com o comando "node nomedoarquivo.js"


// Usamos require no Node, semelhante ao import no JS pra browser
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


// INICIANDO O APP

// Como o express retorna uma função, atribuímos essa função a uma variável
const app = express();

// Faz com que o app permita o envio de dados no formato json
app.use(express.json());
app.use(cors());


// INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// A variável Product nos dá acesso ao model Product
// const Product = mongoose.model('Product');

// ROTAS

// O "use" permite vários métodos (get, put, etc) e aqui estamos definindo que nossa raiz é "/api", ou seja, todas as rotas parte de /api pra funcionar
app.use('/api', require('./src/routes'))/

// Dizendo a aplicação ouvir a porta 3001 do navegador (url: localhost:3001)
app.listen(3001);


