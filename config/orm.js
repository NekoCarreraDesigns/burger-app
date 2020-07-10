const connection = require("./connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(ob) {
    let arr = [];


    for (var key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        let queryString = " SELECT * FROM " + table;
        connection.query(queryString, function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    insertOne: function (table, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES ( ";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        console.log(vals.length);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = " UPDATE " + table
        queryString += " SET "
        queryString += objToSql(objColVals)
        queryString += " WHERE "
        queryString += condition;


        console.log(queryString);
        console.log(objColVals)
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res)
        });
    }
};

module.exports = orm;