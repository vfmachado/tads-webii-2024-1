const express = require('express');

// path abstrai a parte de diretorios quanto ao SO
const path = require('path');

const app = express();

// INDICAR PARA OS SERVER (APP) ONDE ESTAO OS ARQUIVOS ESTATICOS
// para isso cadastramos um middleware
// caminho para a pasta public
// __dirname = caminho absoluto do diretorio DESTE ARQUIVO
// .. VOLTA UMA PASTA NA ARVORE DE DIRS
// PUBLIC É A PASTA COM OS ARQUIVOS
const caminhoPublico = path.join(__dirname, '..', 'public');
app.use(express.static(caminhoPublico));


// NOS UTILIZAMOS MIDDLEWARES PARA ADICIONAR COMPORTAMENTO
// AO NOSSO SERVIDOR, COMO POR EXEMPLO, LIDAR COM PAYLOADS DE REQUISICAO
// OUTRO EXEMPLO QUE EU GOSTO, LOG!!!!

// NO CASO DE PAYLOADS, NORMALMENTE VCS UTILIZAM (SEMPRE)
app.use(express.urlencoded({
  extended: false
}));
// desenvolvendo apis, normalmente utilizamos o json
// app.use(express.json());

const series = [
  { id: 1, name: 'Friends' },
  { id: 2, name: 'Breaking Bad' },
  { id: 3, name: 'Game of Thrones' }
];

const filmes = [
  { id: 1, name: 'Vingadores' },
  { id: 2, name: 'Harry Potter' },
  { id: 3, name: 'Senhor dos Aneis' }
];

// req = request
// res = response
app.get('/', (req, res) => {
  res.send('FUNCIONA!');  // res.send() envia uma resposta para o cliente
});


// import filmes-routes
const filmesRouter = require('./routes/filmes-routes');
app.use('/filmes', filmesRouter);


app.post('/series', (req, res) => {
  console.log("NO MEU BODY TEM ");
  console.log({ body: req.body })
  let { serie_name } = req.body;
  serie_name = serie_name.trim();
  if (serie_name == '') {
    return res.send('NOME DE SERIE INVALIDO (vazio)');
  }
  if (series.findIndex(s => s.name == serie_name) > -1) {
    return res.send("JA EXISTE");
  }
  series.push({
    id: series.length + 1,
    name: serie_name
  });
  res.send({ 
    url: req.originalUrl,
    body: req.body 
  });
});

// RETORNA TODAS AS SERIES
app.get('/series', (req, res) => {
  // res.send(`<pre>${JSON.stringify(series, null, 2)}</pre>`);
  res.send(series);
});

app.get('/series/filtrar', (req, res) => {
  res.send('Pagina de filtro!');
})

// RETORNA UMA ÚNICA SÉRIE BASEADO NO ID
// :id é PARTE DA URL
// automaticamente o express transforma o :id em uma variavel chamada id dentro do req.params
app.get('/series/:id', (req, res) => {
  // busca o id do req.params.id para nao ter que digitar req.params.id toda vez.
  // const id = req.params.id;
  const { id } = req.params;  // destruturação de JS
  const serie = series.find(s => s.id == id); // busca a primeira ocorrencia onde o id da série é o mesmo da variavel id
  
  if (!serie) {
    return res.send("SERIE NAO ENCONTRADA");
  }

  res.send(serie);
});

// * é muito muito perigoso nas urls
app.get('/f*s', (req, res) => {
  res.send("Recurso acessado: " + req.originalUrl);
});

// a ultima rota normalmente é * (qualquer coisa) redireciona para uma pagina nao encontrada
app.get('*', (req, res) => {
  res.send('PAGINA NAO ENCONTRADA');  
})



// http://localhost:3000/
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});