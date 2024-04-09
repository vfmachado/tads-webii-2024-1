
class User {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

class UserRepository {
    constructor(db) {
        this.db = db;
    }

    getAll() {
        const stmt = this.db.prepare('SELECT * FROM users');
        return stmt.all();
    }

    insert(user) {
        const stmt = this.db.prepare(`
        INSERT INTO 
            users (name, email, password, role) 
            VALUES (?, ?, ?, ?)`);
        return stmt.run(user.name, user.email, user.password, user.role);
    }
}

module.exports = { User, UserRepository };