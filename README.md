npm init -y

npm install express

npm install -D nodemon
    - O nodemon irá atualizar o servidor toda vez que houver uma mudança na aplicação
    - Criamos um novo comando em "scripts", no package.json, chamado "dev", com valor "nodemon server.js"
    - Rodamos o novo comando com "npm run dev"