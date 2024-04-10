const dotenv = require('dotenv');

if (process.env.NODE_ENV == 'production') {
    dotenv.config();
    console.log = () => {};
} else {
    dotenv.config({ path: '.env.local' });
}



const express = require('express');

const app = express();

const session = require('express-session')

app.use(session({
    secret: process.env.SESSION_SECRET,     // chave de segurança
    resave: false,
    saveUninitialized: true     // salva a sessão mesmo que ela não tenha sido inicializada
}));

console.log({ 
    SESSION_SECRET: process.env.SESSION_SECRET
})

app.use((req, res, next) => {
    const route = req.url;
    req.session.routes = req.session?.routes || [];
    req.session.routes.push(route);
    
    console.log({ 
        sessionId: req.session.id,
        session: req.session 
    })
    next();
});


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
    res.render('home', { user: req.session.user });
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
}
);