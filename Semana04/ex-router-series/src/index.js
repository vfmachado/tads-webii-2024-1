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


// req = request
// res = response
app.get('/', (req, res) => {
  res.send('FUNCIONA!');  // res.send() envia uma resposta para o cliente
});


// import filmes-routes
const filmesRouter = require('./routes/filmes-routes');
app.use('/filmes', filmesRouter);


const seriesRouter = require('./routes/series-routes');
app.use('/series', seriesRouter);



// a ultima rota normalmente é * (qualquer coisa) redireciona para uma pagina nao encontrada
app.get('*', (req, res) => {
  res.send('PAGINA NAO ENCONTRADA');  
})


// http://localhost:3000/
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});