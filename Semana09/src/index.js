/*

ORMs

- TypeORM - https://typeorm.io/
- Sequelize - https://sequelize.org/
- Prisma - https://www.prisma.io/orm

https://npmtrends.com/prisma-vs-sequelize-vs-typeorm

DEFINICAO
Object Relational Mapping (ORM) é uma técnica de programação que mapeia objetos de software para tabelas de banco de dados.

VANTAGENS

- Abstração do banco de dados (MySQL, PostgreSQL, SQLite, etc)
- Facilita a manutenção do código / velocidade de desenvolvimento
- Facilita a migração de banco de dados, modelagem (migrations)
- Facilita a criação de testes
- Padronização
- Performance ? 

DESVANTAGENS

- Queries complexas podem ser mais lentas
- Curva de aprendizado
- Certeza na query gerada


KNEX - Query Builder
LUCID (AdonisJS) - ORM que usa Knex


INICIANDO COM PRISMA

// Instalar o Prisma
npm install prisma --save-dev

// Inicializar o Prisma
npx prisma init

// Criar uma migration
prisma migrate diff

Next, generate the migration file with prisma migrate diff. Use the following arguments:

--from-empty: assumes the data model you're migrating from is empty
--to-schema-datamodel: the current database state using the URL in the datasource block
--script: output a SQL script
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

executar migration (from docs)
npx prisma migrate resolve --applied 0_init



// gera o arquivo de migração (sql)
npx prisma migrate dev


PRISMA CLIENT

npm install @prisma/client

npx prisma generate


EXTENSOES PARA O VS CODE

- PRISMA
- DATABASE CLIENT
- THUNDER CLIENT

*/

import Crypto from 'crypto';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {

    const users = await prisma.user.findMany();
    console.log(users);
 
}

async function addUser() {
    const newUser = await prisma.user.create({
        data: {
            id: Crypto.randomUUID(),
            name: 'Lucas Coelho',
            email: 'lucas@coelho.com',
            password: '123456'
        }
    });
}

// main();
// addUser();

import express from 'express';
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
    // validacao
    // autenticacao
    // autorizacao
    // regras de negocio
    // testes
    // logs
    const users = await prisma.user.findMany();
    res.json(users);
})

app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await prisma.user.create({
        data: {
            id: Crypto.randomUUID(),
            name,
            email,
            password
        }
    });
    res.json(newUser);
});

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
})