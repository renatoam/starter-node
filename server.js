// Executamos o node no terminal com o comando "node nomedoarquivo.js"


// Usamos require no Node, semelhante ao import no JS pra browser
const express = require('express');

// Como o express retorna uma função, atribuímos essa função a uma variável
const app = express();

// Quando o usuário faz uma requisição à raíz da aplicação; o parâmetro req é o objeto com os dados da requisição (parte do usuário), traz informações como ip, header, etc.; o parâmetro res é a resposta do servidor à requisição;
app.get('/', (req, res) => {

    // é o que estamos enviando como resposta para o usuário (para a requisição)
    res.send('Hello, World')
});

// Dizendo a aplicação ouvir a porta 3001 do navegador (url: localhost:3001)
app.listen(3000);
