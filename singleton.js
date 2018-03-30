class Database {
  static _instance = null;

  static getInstance() {
    if (!this.instance) {
      this._instance = new Database();
    }

    return this._instance;
  }

  constructor() { /* Database connection */ }

  query(sql) { /* Execute query */ }
}

const db = Database.getInstance();

db.query('SELECT * FROM ....');

const db2 = Database.getInstance();

db2.query('SELECT * FROM ....');

console.log(db === db2) // true
