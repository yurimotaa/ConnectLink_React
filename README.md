**ConnectLink**
# React + TypeScript + Vite

ConnectLink é um projeto que consiste em um app para cadastro de clientes.

Nele, o usuário faz seu registro e login, e pode então cadastrar clientes e para cada cliente poderá cadastrar os contatos relacionados a ele. Por fim possivel ver todos os contatos do cliente em especifico atraves de um download de um PDF com as informações.

Utiliza da API: "https://connect-link-api.onrender.com" para fazer as requisições e salvar dados.

**Instruções para rodar o projeto:**

**1- Instalar as dependencias:** Digitar "npm install" no terminal

**2- Configurar DotEnv:** Criar um arquivo na raiz do projeto com o nome ".env" e nele acrescentar a linha "DATABASE_URL=" com a URL de configuração do banco de dados. A URL segue esse modelo: "postgres://NOME_DO_USUARIO:SENHA@PORTA_DE_CONEXÃO/NOME_DA_BASE_DE_DADOS". Acrescentar também a linha "SECRET_KEY=" com uma chave secreta.

**3- Rodar o projeto:** Digitar "npm run dev" no terminal
