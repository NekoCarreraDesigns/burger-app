const mysql = require("mysql");
//const dotenv = require("dotenv").config()

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "8Limb$Thai1978",
        database: "burgers_db"
    });
};
