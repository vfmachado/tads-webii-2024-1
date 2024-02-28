

const http = require('http');

// app => aplicação
const app = http.createServer((req, res) => {
    console.log("CHEGOU UM REQUEST PARA  ");
    // const url = req.url;
    // split divide e retorna um array
    // a primeira posicao é atribuida a var url
    // a segunda posicao a variavel query
    const [ url, query] = req.url.split('?');
    console.log({ url, query })
    
    if (url == '/fatorial') {
        const valorInicial  = Number(query.split('=')[1]);
        let valor = valorInicial;
        let fat = 1;
        while (valor > 1 ) {
            fat = fat * valor;
            valor--;
        }
        res.write(`<h1>Fatorial de ${valorInicial}</h1>`);
        res.write(`<h1>${fat}</h1>`);

    } else {
        res.write(`
        <h1>Vini's Page</h1>
        <p> Lorem ipsum.... </p>

        <h2>Request</h2>
        <pre>${JSON.stringify(req.headers, null, 2)}</pre>
        `);
    }
    res.end();
});

app.listen(3000);