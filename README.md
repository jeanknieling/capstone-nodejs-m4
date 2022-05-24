# Kenzie Academy - Back-End: Módulo 4 - Capstone

Documentação referente a interligação de uma API em Node/ExpressJS e um banco de dados PostgreSQL com suas tabelas.

## Instruções para execução da API e Banco de Dados

### **DOCKER:**

- sudo docker-compose up -d

### **TYPEORM:**

- yarn typeorm migration:create src/migrations/descrição-da-migration

- yarn typeorm migration:generate src/migrations/descrição-da-migration -d src/data-source.ts

- yarn typeorm migration:run -d src/data-source.ts

## Variáveis de Ambiente

Dados           | Chaves
----------------|-----------
Porta externa   | 5435
Porta aplicação | 5432
User            | postgres
Password        | 123456
DB              | data_capstone

## Insomnia - Importação para Testes de Requisições

Variáveis do Insomnia  |   Valores
-----------------------|----------
baseURL                | "http://localhost:3000"
baseHerokuURL          | "https://api-capstone-grupo8.herokuapp.com/"
token                  | gerado automático pelo elemento 0
userID                 | gerado automático pelo elemento 0
productID              | gerado automático pelo elemento 0

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=CRUD%20Collection%20-%20Capstone%20NodeJS&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjeanknieling%2Fcapstone-nodejs-m4%2Ffeature%2Fcrud-productcategory%2FInsomnia.json)
