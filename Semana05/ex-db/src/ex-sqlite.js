const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// this is a top-level await 
(async () => {
    // open the database
    const db = await open({
      filename: 'ex-db.sqlite3',
      driver: sqlite3.Database
    })

    try {
        const titulos = await db.all('SELECT * FROM titulos');
        console.log({ titulos });
    } catch (error) {
        console.log("ERRO!!!")
        console.error(error);
    }

    db.close();
})()