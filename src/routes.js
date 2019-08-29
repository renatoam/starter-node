const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// Quando o usuário faz uma requisição à raíz da aplicação; o parâmetro req é o objeto com os dados da requisição (parte do usuário), traz informações como ip, header, etc.; o parâmetro res é a resposta do servidor à requisição;
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;