const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8Limb$Thai1978",
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


module.exports = connection