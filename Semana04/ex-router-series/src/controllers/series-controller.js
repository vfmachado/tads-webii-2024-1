

const series = [
    { id: 1, name: 'Friends' },
    { id: 2, name: 'Breaking Bad' },
    { id: 3, name: 'Game of Thrones' }
];

class SeriesController {
    constructor() { }

    listaTodos(req, res) {
        // res.send('Lista de séries de dentro do controller');
        res.send(series);
    }

    buscaPorId(req, res) {
        const { id } = req.params;
        const serie = series.find(s => s.id == id);

        if (!serie) {
            return res.send("SERIE NAO ENCONTRADA");
        }

        res.send(serie);
    }

    adiciona(req, res) {
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
        res.redirect('/series');
    }
}

module.exports = SeriesController;
