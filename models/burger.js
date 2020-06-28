const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};


module.exports = burger;