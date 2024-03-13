
const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const categorias = [
    {
        nome: 'AÇÃO',
        titulos: [
            {
                id: 1,
                nome: 'La Casa de Papel',
                imgUrl: 'images/lacasadepapel.jpg'
            },
            {
                id: 2,
                nome: 'The Witcher',
                imgUrl: 'images/thewitcher.jpg'
            },
            {
                id: 3,
                nome: 'Reacher',
                imgUrl: 'images/reacher.jpg'
            }
        ]
    },
    {
        nome: 'COMÉDIA',
        titulos: [
            {
                id: 4,
                nome: 'The Office',
                imgUrl: 'images/theoffice.jpg'
            },
            {
                id: 5,
                nome: 'Friends',
                imgUrl: 'images/friends.jpg'
            }
        ]
    }
];

app.get('/', (req, res) => {
    // res.render('teste', { nome: 'VINICIUS'});
    // res.render('home', { categoria: 'AÇÃO', titulo: series[0].titulos[0] });
    res.render('home', { categorias });
});

app.listen(3000);