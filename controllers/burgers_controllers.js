const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body);
    let cols = ["burger_name", "devoured"]
    burger.create(cols, [req.body.name, req.body.devoured], (result) => {
        console.log(result);
        res.render("index", cols)
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let devoured = req.body.devoured
    let id = "id =" + req.params.id;


    burger.update({
        devoured: devoured,

    }, id, (result) => {
        console.log(result);
    });
});

module.exports = router;