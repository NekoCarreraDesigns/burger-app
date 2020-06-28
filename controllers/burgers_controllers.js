const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers/", (req, res) => {
    burger.create(["burger_name", "devour"], [req.body.burger_name, req.body.devour], (res) => {
        res.json("index", { id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id =" + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;