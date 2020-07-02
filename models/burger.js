const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb)
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};


module.exports = burger;