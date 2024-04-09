
class Titulo {
    constructor(id, nome, descricao, imgUrl, categoria) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.imgUrl = imgUrl;
        this.categoria = categoria;
    }
}

// TituloDAO
class TituloRespository {
    constructor(db) {
        this.db = db;
    }

    getAll() {
        const stmt = this.db.prepare('SELECT * FROM titulos');
        return stmt.all();
    }

    insert(titulo) {
        const stmt = this.db.prepare(`
        INSERT INTO 
            titulos (nome, descricao, categoria, img_url) 
            VALUES (?, ?, ?, ?)`);
        return stmt.run(titulo.nome, titulo.descricao, titulo.categoria, titulo.imgUrl);
    }
}

module.exports = { Titulo, TituloRespository };