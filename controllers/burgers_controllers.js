const express = require("express");
const router = express.Router();

const burgers = require("../models/burger.js");

router.get("/", (req, res) => {
    burgers.selectAll((data) => {
        console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers/", (req, res) => {
    burgers.insertOne("burgers", [req.body.name], (res) => {
        res.render("index", { id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id" + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({
        devoured: req.body.devoured
    }, condition, (res) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;