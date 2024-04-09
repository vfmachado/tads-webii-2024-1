
const express = require('express');

const app = express();

// SISTEMA WEB SERVER SIDE RENDERING
app.use(express.urlencoded({
    extended: false
}));

// API REST
app.use(express.json());


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const filmesRoutes = require('./routers/filmes-routes');
app.use('/filmes', filmesRoutes);

const usersRoutes = require('./routers/users-routes');
app.use('/users', usersRoutes);

const authRoutes = require('./routers/auth-routes');
app.use('/', authRoutes);

app.get('/', (req, res) => {
    // res.render('teste', { nome: 'VINICIUS'});
    // res.render('home', { categoria: 'AÇÃO', titulo: series[0].titulos[0] });
    // res.render('home', { categorias });
    res.render('home');
});

app.listen(3000);