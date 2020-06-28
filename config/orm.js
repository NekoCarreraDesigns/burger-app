const connection = require("../config/connection.js");

printQuetionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}


let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO" + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuetionMarks(vals.length);
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE burgers SET devoured WHERE devoured = true"

        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res)
        });
    }
};

module.exports = orm;