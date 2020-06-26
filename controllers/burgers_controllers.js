const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers/", (req, res) => {
    burger.create(["name"], [req.body.name], (res) => {
        res.json({ id: result.inserId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id" + req.parmas.id;

    console.log("condition", condition);

    cat.update({
        devoured: req.body.devoured
    }, conditon, (res) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;