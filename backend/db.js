const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "farmer"
});

db.connect((err) => {
    if (err) {
        console.log("Some error occurred ❌", err);
    } else {
        console.log("Database connected successfully ✅");
    }
});

module.exports = db;
