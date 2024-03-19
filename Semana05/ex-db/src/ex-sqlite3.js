
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ex-db.sqlite3');

function buscarTitulos() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM titulos', (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log({ rows });
            resolve(rows);
        });
    });
}


async function executa() {
    const titulos = await buscarTitulos();
    console.log({ titulos });
}

executa();