const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE contacts (name TEXT, email TEXT, message TEXT)");
});

module.exports = db;
