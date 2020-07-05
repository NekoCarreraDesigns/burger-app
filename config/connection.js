const mysql = require("mysql");
const dotenv = require("dotenv").config()

const connection = mysql.createConnection({
    host: process.env.db_host,
    port: 3306,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: "burgers_db"
});
//connect to database
connection.connect((err) => {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id:" + connection.threadId);
});


module.exports = connection;