
const bettersqlite = require('better-sqlite3');

const db = bettersqlite('ex-db.sqlite3');

module.exports = db;
