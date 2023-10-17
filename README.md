# API de Catálogo de Pokemons com Autenticação

Este projeto é uma API que permite aos usuários catalogar seus Pokemons. A API possui autenticação, garantindo que cada usuário logado possa gerenciar seus próprios Pokemons.

## Requisitos

### Banco de Dados

Existe um banco de dados chamado `catalogo_pokemons` com as seguintes tabelas:

#### Tabela `usuarios`

- `id`: Identificador único do usuário (chave primária e auto incremento)
- `nome`: Nome do usuário (obrigatório)
- `email`: Email do usuário (obrigatório e único)
- `senha`: Senha do usuário (obrigatório)

#### Tabela `pokemons`

- `id`: Identificador único do Pokemon (chave primária e auto incremento)
- `usuario_id`: Identificador do usuário (obrigatório)
- `nome`: Nome do Pokemon (obrigatório)
- `habilidades`: Habilidades do Pokemon (obrigatório)
- `imagem`: Imagem do Pokemon
- `apelido`: Apelido do Pokemon

O código de criação das tabelas está colocado no arquivo `dump.sql`.

### Entidade Usuários

As seguintes funcionalidades foram implementadas para a entidade usuários:

#### Cadastro de Usuário

A senha do usuário é criptografada usando a biblioteca bcrypt antes de salvar o cadastro.

#### Login de Usuário

As credenciais do usuário são validadas usando a biblioteca bcrypt. O token de autenticação é gerado com a biblioteca jsonwebtoken.

### Entidade Pokemons

As seguintes funcionalidades foram implementadas para a entidade pokemons:

#### Cadastro de Pokemon

#### Atualização apenas do Apelido do Pokemon

#### Listagem Completa dos Pokemons

#### Listagem de Apenas um Pokemon Filtrado pelo seu ID

#### Exclusão do Pokemon

Para as funcionalidades da entidade pokemons, é obrigatório:

- Receber o token do header da requisição (`authorization`) no formato Bearer Token e validar o usuário logado em todos os endpoints.
- O campo `usuario_id` não é capturado do body da requisição. É obtido do token recebido no header.
- No cadastro de pokemon, o campo habilidades recebe apenas uma string de habilidades separadas por vírgulas.
- Na listagem de pokemons, o campo habilidades retorna um array de habilidades.

# Tecnologias Utilizadas

A construção desta API envolveu o uso de várias tecnologias poderosas e eficientes. Aqui está uma visão geral das tecnologias utilizadas:

## Postgres SQL

Postgres SQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) poderoso e de código aberto. Ele foi usado para criar e gerenciar o banco de dados `catalogo_pokemons` para esta API.

## Node.js

Node.js é uma plataforma de tempo de execução JavaScript que permite executar JavaScript no servidor. Foi a tecnologia principal usada para construir a lógica do servidor para esta API.

## Express.js

Express.js é um framework web rápido, descomplicado e flexível para Node.js. Foi usado para configurar os endpoints da API e lidar com as solicitações HTTP.

## PG (Node PostgreSQL)

PG é um cliente PostgreSQL não bloqueante para Node.js. Foi usado para conectar a API ao banco de dados Postgres SQL e executar consultas SQL.

## JSON Web Token (JWT)

JSON Web Token (JWT) é uma norma aberta (RFC 7519) que define uma maneira compacta e independente de transmitir informações entre as partes como um objeto JSON. Foi usado para implementar a autenticação na API.

## Bcrypt

Bcrypt é uma biblioteca para ajudar você a codificar senhas. Foi usado para criptografar as senhas dos usuários antes de salvá-las no banco de dados e para validar as credenciais do usuário durante o login.

Cada uma dessas tecnologias desempenhou um papel crucial na construção desta API, contribuindo para sua eficiência, segurança e robustez.
