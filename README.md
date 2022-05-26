# Kenzie Academy - Back-End: Módulo 4 - Capstone - Documentação API

Documentação referente a interligação de uma API em Node/ExpressJS e um banco de dados PostgreSQL com suas tabelas.

## Tabela de Conteúdos

- [Kenzie Academy - Back-End: Módulo 4 - Capstone - Documentação API](#kenzie-academy---back-end-módulo-4---capstone---documentação-api)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [1. Visão Geral](#1-visão-geral)
  - [2. Diagrama ER](#2-diagrama-er)
  - [3. Início Rápido](#3-início-rápido)
    - [3.1. Instalando Dependências](#31-instalando-dependências)
    - [3.2. Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [3.3. Migrations](#33-migrations)
    - [3.4 Docker](#34-docker)
  - [4. Autenticação](#4-autenticação)
  - [5. Endpoints](#5-endpoints)
    - [Índice](#índice)
  - [6. **Usuários**](#6-usuários)
    - [6.1. **Criação de Usuário**](#61-criação-de-usuário)
    - [`/users`](#users)
    - [Exemplo de Request:](#exemplo-de-request)
    - [Corpo da Requisição:](#corpo-da-requisição)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup)
    - [Exemplo de Response:](#exemplo-de-response)
    - [Possíveis Erros:](#possíveis-erros)
    - [6.2. **Login de Usuário**](#62-login-de-usuário)
    - [`/users/login`](#userslogin)
    - [Requisitos:](#requisitos)
    - [Exemplo de Request:](#exemplo-de-request-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-1)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possíveis Erros:](#possíveis-erros-1)
    - [6.3. **Listando Usuários**](#63-listando-usuários)
    - [`/users`](#users-1)
    - [Requisitos:](#requisitos-1)
    - [Exemplo de Request:](#exemplo-de-request-2)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possíveis Erros:](#possíveis-erros-2)
    - [6.4. **Listando um Usuário**](#64-listando-um-usuário)
    - [`/users/me`](#usersme)
    - [Requisitos:](#requisitos-2)
    - [Exemplo de Request:](#exemplo-de-request-3)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possíveis Erros:](#possíveis-erros-3)
    - [6.5. **Deletando um Usuário**](#65-deletando-um-usuário)
    - [`/users/me`](#usersme-1)
    - [Requisitos:](#requisitos-3)
    - [Exemplo de Request:](#exemplo-de-request-4)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possíveis Erros:](#possíveis-erros-4)
    - [6.6. **Atualizando um Usuário**](#66-atualizando-um-usuário)
    - [`/users/me`](#usersme-2)
    - [Requisitos:](#requisitos-4)
    - [Exemplo de Request:](#exemplo-de-request-5)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possíveis Erros:](#possíveis-erros-5)
  - [7. **Produtos**](#7-produtos)
    - [7.1. **Criação de Produtos**](#71-criação-de-produtos)
    - [`/products`](#products)
    - [Requisitos:](#requisitos-5)
    - [Exemplo de Request:](#exemplo-de-request-6)
    - [Corpo da Requisição:](#corpo-da-requisição-6)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-2)
    - [Exemplo de Response:](#exemplo-de-response-6)
    - [Possíveis Erros:](#possíveis-erros-6)
    - [7.2. **Listando Produtos**](#72-listando-produtos)
    - [`/products`](#products-1)
    - [Requisitos:](#requisitos-6)
    - [Exemplo de Request:](#exemplo-de-request-7)
    - [Corpo da Requisição:](#corpo-da-requisição-7)
    - [Exemplo de Response:](#exemplo-de-response-7)
    - [Possíveis Erros:](#possíveis-erros-7)
    - [6.3. **Listando Produto por Nome**](#63-listando-produto-por-nome)
    - [`/products/product`](#productsproduct)
    - [Requisitos:](#requisitos-7)
    - [Exemplo de Request:](#exemplo-de-request-8)
    - [Corpo da Requisição:](#corpo-da-requisição-8)
    - [Exemplo de Response:](#exemplo-de-response-8)
    - [Possíveis Erros:](#possíveis-erros-8)
    - [6.4. **Listando Produtos por Categoria**](#64-listando-produtos-por-categoria)
    - [`/porducts/category`](#porductscategory)
    - [Requisitos:](#requisitos-8)
    - [Exemplo de Request:](#exemplo-de-request-9)
    - [Corpo da Requisição:](#corpo-da-requisição-9)
    - [Exemplo de Response:](#exemplo-de-response-9)
    - [Possíveis Erros:](#possíveis-erros-9)
    - [6.5. **Atualizando um Produto**](#65-atualizando-um-produto)
    - [`/porducts/changes/:id`](#porductschangesid)
    - [Requisitos:](#requisitos-9)
    - [Exemplo de Request:](#exemplo-de-request-10)
    - [Corpo da Requisição:](#corpo-da-requisição-10)
    - [Exemplo de Response:](#exemplo-de-response-10)
    - [Possíveis Erros:](#possíveis-erros-10)
    - [7.6. **Deletando um Produto**](#76-deletando-um-produto)
    - [`/users/me`](#usersme-3)
    - [Requisitos:](#requisitos-10)
    - [Exemplo de Request:](#exemplo-de-request-11)
    - [Corpo da Requisição:](#corpo-da-requisição-11)
    - [Exemplo de Response:](#exemplo-de-response-11)
    - [Possíveis Erros:](#possíveis-erros-11)
  - [8. **Categorias**](#8-categorias)
    - [8.1. **Criação de Categoria**](#81-criação-de-categoria)
    - [`/category`](#category)
    - [Requisitos:](#requisitos-11)
    - [Exemplo de Request:](#exemplo-de-request-12)
    - [Corpo da Requisição:](#corpo-da-requisição-12)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-3)
    - [Exemplo de Response:](#exemplo-de-response-12)
    - [Possíveis Erros:](#possíveis-erros-12)
    - [8.2. **Listando Categorias**](#82-listando-categorias)
    - [`/category`](#category-1)
    - [Requisitos:](#requisitos-12)
    - [Exemplo de Request:](#exemplo-de-request-13)
    - [Corpo da Requisição:](#corpo-da-requisição-13)
    - [Exemplo de Response:](#exemplo-de-response-13)
    - [Possíveis Erros:](#possíveis-erros-13)
    - [8.3 **Listando uma Categoria**](#83-listando-uma-categoria)
    - [`/category/:id`](#categoryid)
    - [Requisitos:](#requisitos-13)
    - [Exemplo de Request:](#exemplo-de-request-14)
    - [Corpo da Requisição:](#corpo-da-requisição-14)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-4)
    - [Exemplo de Response:](#exemplo-de-response-14)
    - [Possíveis Erros:](#possíveis-erros-14)
    - [8.4 **Deletando uma Categoria**](#84-deletando-uma-categoria)
    - [`/category/:id`](#categoryid-1)
    - [Requisitos:](#requisitos-14)
    - [Exemplo de Request:](#exemplo-de-request-15)
    - [Corpo da Requisição:](#corpo-da-requisição-15)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-5)
    - [Exemplo de Response:](#exemplo-de-response-15)
    - [Possíveis Erros:](#possíveis-erros-15)
    - [8.5. **Atualizando uma Categoria**](#85-atualizando-uma-categoria)
    - [`/category/:id`](#categoryid-2)
    - [Requisitos:](#requisitos-15)
    - [Exemplo de Request:](#exemplo-de-request-16)
    - [Corpo da Requisição:](#corpo-da-requisição-16)
  - [Schema de Validação com Yup:](#schema-de-validação-com-yup-6)
    - [Exemplo de Response:](#exemplo-de-response-16)
    - [Possíveis Erros:](#possíveis-erros-16)
  - [Insomnia - Importação para Testes de Requisições](#insomnia---importação-para-testes-de-requisições)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Insomnia](https://insomnia.rest/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

[DER](https://drive.google.com/file/d/1IHJYtbxzcYLkAXXtc7Uj7gYr8opKTQ67/view?usp=sharing)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Crie as migration com o comando:

```
yarn typeorm migration:create src/migrations/descrição-da-migration
```

Em seguida, é preciso gerar as migrations com o seguindo comando:

```
yarn typeorm migration:generate src/migrations/descrição-da-migration -d src/data-source.ts
```

Para finalizar, execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

### 3.4 Docker

Use o comando abaixo para iniciar o Docker

```
sudo docker-compose up -d
```

---

<!-- ## Variáveis de Ambiente

| Dados           | Chaves        |
| --------------- | ------------- |
| Porta externa   | 5435          |
| Porta aplicação | 5432          |
| User            | postgres      |
| Password        | 123456        |
| DB              | data_capstone | -->

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Colocar autenticações aqui caso existam.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /users](#61-criação-de-usuário)
  - [POST - /users/login](#62-login-de-usuário)
  - [GET - /users](#63-listando-usuários)
  - [GET - /users/me](#64-listando-um-usuário)
  - [DELETE - /users/me](#65-deletando-um-usuário)
  - [PATCH - /users/me](#66-atualizando-um-usuário)
- [Products](#2-products)
  - [POST - /products](#21-criação-de-produto)
  - [GET - /products](#22-listar-os-produtos)
  - [GET - /products](#23-listando-um-produto)
  - [DELETE - /products](#24-deletando-um-produto)
  - [PATCH - /products](#25-atualizando-um-produto)
- [Categories](#3-categories)
  - [POST - /categories](#31-criação-de-categoria)
  - [GET - /categories](#32-listar-de-categoria)
  - [GET - /categories/:id](#33-listar-um-categoria)
  - [DELETE - /categories/:id](#34-deletar-um-categoria)
  - [PATCH - /categories/edit/:id](#35-atualizar-um-categoria)

---

## 6. **Usuários**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      | Tipo    | Descrição                                    |
| ---------- | ------- | -------------------------------------------- |
| id         | string  | Identificador único do usuário               |
| name       | string  | O nome do usuário.                           |
| nickname   | string  | O apelido do usuário.                        |
| birthday   | date    | A data de nascimento do usuário.             |
| email      | string  | O e-mail do usuário.                         |
| password   | string  | A senha de acesso do usuário                 |
| isAdm      | boolean | Define se um usuário é Administrador ou não. |
| creaetd_at | date    | A data de criação do usuário.                |
| updated_at | date    | A data de atualização do usuário.            |

Obs: os campos name e password vêem encriptogrados na resposta, por motivos de privacidade do usuário.

---

### 6.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "usuario 1",
  "nickname": "apelido do usuario 1",
  "birthday": "2000-01-01",
  "email": "usario1@kenzie.com",
  "password": "12345678",
  "isAdm": true
}
```

### Schema de Validação com Yup:

```javascript
    name: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .required("Name is required"),
    nickname: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .required("Nickname is required"),
    birthday: yup
      .date()
      .max(new Date(minYear, minMonth, minDay), "You must be over 18 years old")
      .required("Birthday is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters long")
      .required("Password is required"),
    isAdm: yup.boolean().required("isAdm is required"),
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "7519b538-0df9-4a07-9dde-387c96c342c2",
  "created_at": "2022-05-23T17:26:00.193Z",
  "updated_at": "2022-05-23T17:26:00.193Z",
  "name": "$2b$10$bTtduMVoS8F2mtowDosSqOIBFZQ.KVziuM.ysqfywlpho32PDiraO",
  "nickname": "apelido usuario 1",
  "birthday": "2000-02-02",
  "email": "usuario1@kenzie.com",
  "password": "$2b$10$wfnhldrB6iFECAQtWW7n8eYyV0DFl5yOezsWjpixLNjrmaMzO0d0y",
  "isAdm": true
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

---

### 6.2. **Login de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users/login`

### Requisitos:

O usuário já deverá ter sido criado.

### Exemplo de Request:

```
POST /users
Host:http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "usario1@kenzie.com",
  "password": "12345678"
}
```

### Schema de Validação com Yup:

```javascript
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password is very short")
    .required("Password is required"),
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MTliNTM4LTBkZjktNGEwNy05ZGRlLTM4N2M5NmMzNDJjMiIsImlzQWRtIjp0cnVlLCJpYXQiOjE2NTMzMjg1MzcsImV4cCI6MTY1MzQxNDkzN30.dS7nNTDrJJHpXjEMPn4RacknGKBSqDZggk49AHnLMmU"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição               |
| --------------- | ----------------------- |
| 400 Bad Request | Password is very short. |
| 403 Forbidden   | Wrong email/password.   |

---

### 6.3. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Requisitos:

O usuário deve estar logado.<br>
Apenas usuário administrador pode fazer esta requisição. (isAdm: true)

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "7519b538-0df9-4a07-9dde-387c96c342c2",
  "created_at": "2022-05-23T17:26:00.193Z",
  "updated_at": "2022-05-23T17:26:00.193Z",
  "name": "$2b$10$bTtduMVoS8F2mtowDosSqOIBFZQ.KVziuM.ysqfywlpho32PDiraO",
  "nickname": "apelido usuario 1",
  "birthday": "2000-02-02T02:00:00.000Z",
  "email": "usuario1@kenzie.com",
  "password": "$2b$10$wfnhldrB6iFECAQtWW7n8eYyV0DFl5yOezsWjpixLNjrmaMzO0d0y",
  "isAdm": true,
  "address": [],
  "buys": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

---

### 6.4. **Listando um Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/me`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.

### Exemplo de Request:

```
GET /users/me
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "7519b538-0df9-4a07-9dde-387c96c342c2",
  "created_at": "2022-05-23T17:26:00.193Z",
  "updated_at": "2022-05-23T17:26:00.193Z",
  "name": "$2b$10$bTtduMVoS8F2mtowDosSqOIBFZQ.KVziuM.ysqfywlpho32PDiraO",
  "nickname": "apelido usuario 1",
  "birthday": "2000-02-02T02:00:00.000Z",
  "email": "usuario1@kenzie.com",
  "password": "$2b$10$wfnhldrB6iFECAQtWW7n8eYyV0DFl5yOezsWjpixLNjrmaMzO0d0y",
  "isAdm": true,
  "address": [],
  "buys": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid Token. |

---

### 6.5. **Deletando um Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/me`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.

### Exemplo de Request:

```
GET /users/me
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User deleted"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid Token. |

---

### 6.6. **Atualizando um Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/me`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
O nickname só pode ser atualizado caso tenha no mínimo 3 caracteres.<br>
A senha só pode ser atualizada caso tenha no mínimo 8 caracteres.

### Exemplo de Request:

```
GET /users/me
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "nickname": "apelido do usuario 2",
  "password": "senhaforte123456"
}
```

Obs: é possível atualizar apenas o nickname ou apenas o password, além de poder atualizar os dois juntos.

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "7519b538-0df9-4a07-9dde-387c96c342c2",
  "created_at": "2022-05-23T17:26:00.193Z",
  "updated_at": "2022-05-23T21:20:50.450Z",
  "name": "$2b$10$bTtduMVoS8F2mtowDosSqOIBFZQ.KVziuM.ysqfywlpho32PDiraO",
  "nickname": "apelido do usuario 2",
  "birthday": "2000-02-02T02:00:00.000Z",
  "email": "usuario1@kenzie.com",
  "password": "$2b$10$2XXl/G3qsCwhwFwJnTHiIuUq8EUi1FB5izweb5S7xzBDX0PYbNeiO",
  "isAdm": true,
  "address": [],
  "buys": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                           |
| ---------------- | ----------------------------------- |
| 401 Unauthorized | Invalid Token.                      |
| 400 Bad Request  | Must be at least 3 characters long. |
| 400 Bad Request  | Must be at least 8 characters long. |

---

## 7. **Produtos**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo       | Tipo   | Descrição                                   |
| ----------- | ------ | ------------------------------------------- |
| id          | string | Identificador único do produto              |
| name        | string | O nome do produto.                          |
| description | string | A descrição do produto.                     |
| price       | number | O preço do produto.                         |
| category    | string | A categoria ao qual o produto pertence.     |
| password    | string | A senha de acesso do usuário                |
| likes       | number | A quantidade de likes que o produto possui. |
| creaetd_at  | date   | A data de criação do usuário.               |
| updated_at  | date   | A data de atualização do usuário.           |

---

### 7.1. **Criação de Produtos**

[ Voltar para os Endpoints ](#5-endpoints)

### `/products`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.
O produto só poderá ser criado caso a categoria ao qual pertence já foi criada.

### Exemplo de Request:

```
POST /products
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "produto 1",
  "description": "descrição do produto 1",
  "price": 600,
  "category": "categoria 1"
}
```

### Schema de Validação com Yup:

```javascript
    name: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .required("Name is required"),
    nickname: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .required("Nickname is required"),
    birthday: yup
      .date()
      .max(new Date(minYear, minMonth, minDay), "You must be over 18 years old")
      .required("Birthday is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters long")
      .required("Password is required"),
    isAdm: yup.boolean().required("isAdm is required"),
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "created_at": "2022-05-24T14:51:19.520Z",
  "updated_at": "2022-05-24T14:51:19.520Z",
  "id": "94c17132-4b76-497f-bda3-0116c8461d48",
  "name": "produto 1",
  "description": "descrição do produto 1",
  "price": 600,
  "category": {
    "created_at": "2022-05-24T14:50:50.029Z",
    "updated_at": "2022-05-24T14:50:50.029Z",
    "id": 2,
    "name": "categoria 1",
    "discount_value": 0
  },
  "likes": 0
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                  |
| --------------- | -------------------------- |
| 400 Bad Request | Product already exists.    |
| 400 Bad Request | Category was not informed. |
| 404 Not Found   | Category not found.        |

---

### 7.2. **Listando Produtos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.

### Exemplo de Request:

```
GET /products/product
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "created_at": "2022-05-24T14:51:19.520Z",
  "updated_at": "2022-05-24T14:51:19.520Z",
  "id": "94c17132-4b76-497f-bda3-0116c8461d48",
  "name": "produto 1",
  "description": "descrição do produto 1",
  "price": 600,
  "likes": 0,
  "category": {
    "created_at": "2022-05-24T14:50:50.029Z",
    "updated_at": "2022-05-24T14:50:50.029Z",
    "id": 2,
    "name": "categoria 1",
    "discount_value": 0
  },
  "order": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid Token. |

---

### 6.3. **Listando Produto por Nome**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products/product`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.
O produto já deve estar criado.

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "produto 1"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "created_at": "2022-05-24T14:51:19.520Z",
  "updated_at": "2022-05-24T14:51:19.520Z",
  "id": "94c17132-4b76-497f-bda3-0116c8461d48",
  "name": "produto 1",
  "description": "descrição do produto 1",
  "price": 600,
  "likes": 0,
  "category": {
    "created_at": "2022-05-24T14:50:50.029Z",
    "updated_at": "2022-05-24T14:50:50.029Z",
    "id": 2,
    "name": "categoria 1",
    "discount_value": 0
  },
  "order": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 404 Not Found    | Product not found |
| 401 Unauthorized | Invalid Token.    |

---

### 6.4. **Listando Produtos por Categoria**

[ Voltar aos Endpoints ](#5-endpoints)

### `/porducts/category`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.
O produto já deve estar criado.

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "category": "categoria 1"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "created_at": "2022-05-24T14:51:19.520Z",
  "updated_at": "2022-05-24T14:51:19.520Z",
  "id": "94c17132-4b76-497f-bda3-0116c8461d48",
  "name": "produto 1",
  "description": "descrição do produto 1",
  "price": 600,
  "likes": 0,
  "category": {
    "created_at": "2022-05-24T14:50:50.029Z",
    "updated_at": "2022-05-24T14:50:50.029Z",
    "id": 2,
    "name": "categoria 1",
    "discount_value": 0
  },
  "order": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 404 Not Found    | Category not found |
| 401 Unauthorized | Invalid Token.     |

---

### 6.5. **Atualizando um Produto**

[ Voltar aos Endpoints ](#5-endpoints)

### `/porducts/changes/:id`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
Apenas usuário administrador pode fazer esta requisição. (isAdm: true).<br>
O produto só pode ser atualizado caso já tenha sido criado.<br>
A categoria só pode ser atualizada caso já tenha sido criada.

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "produto 2",
  "description": "descrição do produto 2",
  "price": 400,
  "category": "categoria 2"
}
```

Obs: é possível atualizar apenas o nickname ou apenas o password, além de poder atualizar os dois juntos.

### Exemplo de Response:

```
200 OK
```

```json
{
  "status": true,
  "message": "Product updated with success!"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição           |
| ---------------- | ------------------- |
| 401 Unauthorized | Invalid Token.      |
| 404 Not Found    | Category not found. |

---

### 7.6. **Deletando um Produto**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/me`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
Apenas usuário administrador pode fazer esta requisição. (isAdm: true).<br>
O produto só pode ser deletado caso já tenha sido criado.

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "status": true,
  "message": "Product deleted with sucess!"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid Token. |

---

## 8. **Categorias**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo          | Tipo   | Descrição                                  |
| -------------- | ------ | ------------------------------------------ |
| id             | string | Identificador da categoria                 |
| name           | string | O nome da categoria.                       |
| discount_value | number | Define o valor de desconto para categoria. |
| creaetd_at     | date   | A data de criação da categoria.            |
| updated_at     | date   | A data de atualização da categoria.        |

---

### 8.1. **Criação de Categoria**

[ Voltar para os Endpoints ](#5-endpoints)

### `/category`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
Apenas usuário administrador pode fazer esta requisição. (isAdm: true)<br>
O nome deve ter no mínimo 3 caracteres

### Exemplo de Request:

```
POST /category
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "categoria 1"
}
```

### Schema de Validação com Yup:

```javascript
  name: yup
    .string()
    .min(3, "Must be at least 3 characters long")
    .required("Name is required"),
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "created_at": "2022-05-24T14:50:50.029Z",
  "updated_at": "2022-05-24T14:50:50.029Z",
  "id": 2,
  "name": "categoria 1",
  "discount_value": 0
}
```

### Possíveis Erros:

| Código do Erro   | Descrição               |
| ---------------- | ----------------------- |
| 401 Unauthorized | Invalid Token.          |
| 400 Bad Request  | Category already exists |

---

### 8.2. **Listando Categorias**

[ Voltar aos Endpoints ](#5-endpoints)

### `/category`

### Requisitos:

O usuário deve estar logado.<br>

### Exemplo de Request:

```
GET /category
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "created_at": "2022-05-24T14:50:50.029Z",
  "updated_at": "2022-05-24T14:50:50.029Z",
  "id": 2,
  "name": "categoria 1",
  "discount_value": 0
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid Token. |

---

### 8.3 **Listando uma Categoria**

[ Voltar aos Endpoints ](#5-endpoints)

### `/category/:id`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
O id deve ser inserido nos parâmetros e deve ser maior que 0.

### Exemplo de Request:

```
GET /category/:id
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Schema de Validação com Yup:

```javascript
  id: yup
    .number()
    .min(1, "Id must be greater then 0")
    .required("Id is required in params"),
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "created_at": "2022-05-24T14:50:50.029Z",
  "updated_at": "2022-05-24T14:50:50.029Z",
  "id": 2,
  "name": "categoria 1",
  "discount_value": 0
}
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid Token.     |
| 404 Not Found    | Category not found |

---

### 8.4 **Deletando uma Categoria**

[ Voltar aos Endpoints ](#5-endpoints)

### `/category/:id`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
Apenas usuário administrador pode fazer esta requisição. (isAdm: true)<br>
O id deve ser inserido nos parâmetros e deve ser maior que 0.

### Exemplo de Request:

```
GET /category/:id
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Schema de Validação com Yup:

```javascript
  id: yup
    .number()
    .min(1, "Id must be greater then 0")
    .required("Id is required in params"),
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "status": true,
  "message": "Category deleted with success!"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid Token. |

---

### 8.5. **Atualizando uma Categoria**

[ Voltar aos Endpoints ](#5-endpoints)

### `/category/:id`

### Requisitos:

O usuário deve estar logado e o token gerado deve ser inserido no Header.<br>
Apenas usuário administrador pode fazer esta requisição. (isAdm: true)<br>
O id deve ser inserido nos parâmetros e deve ser maior que 0.<br>

### Exemplo de Request:

```
GET /category/:id
Host: http://localhost:3000
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "categoria 2",
  "discount_value": 10
}
```

## Schema de Validação com Yup:

```javascript
  params: {
      yupSchema: yup.object().shape({
        id: yup
          .number()
          .min(1, "Id must be greater then 0")
          .required("Id is required in params"),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(3, "Must be at least 3 characters long"),
        discount_value: yup.number(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },


```

### Exemplo de Response:

```
200 OK
```

```json
{
  "status": true,
  "message": "Category updated with success!"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                          |
| ---------------- | ---------------------------------- |
| 401 Unauthorized | Invalid Token.                     |
| 404 Not Found    | Category not found                 |
| 400 Bad Request  | Category already exists            |
| 400 Bad Request  | Must be at least 3 characters long |

---

## Insomnia - Importação para Testes de Requisições

| Variáveis do Insomnia | Valores                                      |
| --------------------- | -------------------------------------------- |
| baseURL               | "http://localhost:3000"                      |
| baseHerokuURL         | "https://api-capstone-grupo8.herokuapp.com/" |
| token                 | gerado automático pelo elemento 0            |
| userID                | gerado automático pelo elemento 0            |
| productID             | gerado automático pelo elemento 0            |

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=CRUD%20Collection%20-%20Capstone%20NodeJS&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjeanknieling%2Fcapstone-nodejs-m4%2Ffeature%2Fcrud-productcategory%2FInsomnia.json)
