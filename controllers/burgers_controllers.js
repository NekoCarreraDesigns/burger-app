const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        console.log(data);
        const hbObj = {
            burger: data
        }
        res.render("index", hbObj);
    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body);
    let cols = ["burger_name", "devoured"]
    burger.create(cols, [`${req.body.name}`, req.body.devoured], (result) => {
        console.log(result);
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let eaten = req.body.devoured;
    let condition = "id =" + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: eaten
    }, condition, (result) => {
        console.log(result);
    });
});

module.exports = router;