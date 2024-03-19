
const initialTime = Date.now();

const db = require('better-sqlite3')('ex-db.sqlite3');

console.log('Tempo de abertura do banco de dados:', Date.now() - initialTime);

const stmt = db.prepare('SELECT * FROM titulos');
const titulos = stmt.all();

console.log({ titulos });
