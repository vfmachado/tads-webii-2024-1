
const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const filmesRoutes = require('./routers/filmes-routes');
app.use('/filmes', filmesRoutes);

app.get('/', (req, res) => {
    // res.render('teste', { nome: 'VINICIUS'});
    // res.render('home', { categoria: 'AÇÃO', titulo: series[0].titulos[0] });
    // res.render('home', { categorias });
    res.send('HOME');
});

app.listen(3000);