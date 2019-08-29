Api criada com NodeJS no curso starter Node da Rocketseat

1. Configurar o package.json
> npm init -y

2. Instalar o Express.js para trabalhar com as rotas da aplicação
> npm install express

3. Desenvolver a base da aplicação (ver arquivo server.js)

4. Executar o servidor (deixar rodando). Não executamos quando usamos nodemon, apenas o comando do nodemon
> node server.js

5. No browser, usar porta definida no método .listen() (3001, no nosso caso).
> localhost:3001

6. Instalar o nodemon para reiniciar o servidor em tempo real a cada alteração
> npm install -D nodemon
    
    6.1. O nodemon irá atualizar o servidor toda vez que houver uma mudança na aplicação
    6.2. Criamos um novo comando em "scripts", no package.json, chamado "dev", com valor "nodemon server.js"
    6.3. Rodamos Dev (deixamos rodando, ele irá monitorar as alterações). Não precisamos rodar node server.js.
> npm run dev

7. Instalação do Docker

    7.1 Criar conta no site do Docker
    7.2 Baixar e instalar o Docker CE (Community). Também terá a instalação do HyperV

8. Baixar a máquina virtual do Mongo
> docker pull mongo

9. Subir a vm/container que foi instalada
> docker run --name mongodb -p 27017:27017 -d mongo

    9.1. "--name mongodb": estamos definindo o nome que iremos usar para chamar a vm
    9.2. "-p 27017:27017": como estamos usando uma vm, não estamos usando as portas do nosso ambiente, mas da vm. Nesse caso, usamos esse parâmetro para referenciar nossa porta (qualquer uma, mas de preferência a mesma que o mongo usa) com a porta que o mongo usa na vm. 
    9.3. "-d mongo": se refere à imagem que estamos usando para subir a vm, no caso, a do mongo que acabamos de instalar
    9.4. Ao executar o comando, ele irá gerar um código

10. Retornar quais imagens estão rodando no momento
> docker ps

11. Testar se a instalação e configuração está correta

    11.1. Instalar o Robo3t no site da robomongo
    11.2. Ao abrir, criar em "create" e configurar a conexão (deixei igual no curso, o nome Docker e localhost com a porta do mongo). Salvar.
    11.3. Connect.

12. Ao reiniciar a máquina, a imagem será finalizada. Para iniciar novamente: 
> docker start mongodb (aqui pode ser o nome de qualquer imagem)

13. Instalação do mongoose. 
> npm install mongoose

    13.1. O mongoose é um ORM.
    13.2. O ORM (Object Relational Mapping) encapsula a lógica do banco de dados e permite que a gente acesse a lógica do banco com código JS, ou seja, ele permite que usemos Javascript para realizar um CRUD, por exemplo, sem precisar usar a linguagem SQL (insert into, select * from, update, etc.)

14. Criar o Model (MVC). O model é basicamente uma representação de uma tabela do banco de dados.

    - Criar diretórios src > models > product.js
    - Criar um schema (campos/atributos e valor)

15. Instalar require-dir.
> npm install require-dir

    - Ele serve para não termos que ficar definindo require para cada model que criarmos.
    - Para importar em uma variável e quando usar basta apontar para o diretório dos models

16. Criar o arquivo routes.js na pasta src. Criar pasta controllers (src) e criar o arquivo ProductController.js

    - É na controller que nossa lógica fica disposta
    - Nas rotas, executamos com o get na rota correta (products, no caso), o método index da controller (temos que importá-la). Ele faz uma busca no banco, através da model Product todos os registros salvos de products (retorna um json)

17. Testar as rotas da API com Insomnia
    - Testar métodos get, post, put, delete
    - Criando rotas para cada um em routes.js
    - Criando métodos com async/await na controller (index, show, store, update, destroy)

18. Instalar mongoose-paginate
> npm install mongoose-paginate

    - Informa o uso do plugin no model
    - Plugin que controla a paginação da resposta
    - Guarda os objetos da resposta em um array chamado "docs"
    - Fornece informações novas: total de páginas, limite de páginas, paágina atual e total de páginas

19. Utilizar parâmetros no método get

    - Criar um objeto na controller que recebe os parâmetros do método get (que é um objeto tbm)

20. Adicionando CORS
> npm install cors