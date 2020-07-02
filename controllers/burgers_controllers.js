const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();
router.get("/", (req, res) => {
    res.redirect("/burgers")
})
router.get("/burgers", (req, res) => {
    burger.all((data) => {
        console.log(data);
        res.render("index", { burgers: data });

    });
});

router.post("/burgers/create", (req, res) => {
    console.log(req.body);
    burger.create(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let devoured = req.body.devoured
    let id = "id =" + req.params.id;
    console.log(req.body)
    console.log(devoured, "eaten")
    burger.update({
        devoured: devoured,

    }, id, (result) => {
        console.log(result);
    });
});

module.exports = router;