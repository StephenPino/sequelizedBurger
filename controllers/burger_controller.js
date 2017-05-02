var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

// Here will be all the routes and the logic within each individual route as needed

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, false
        ], () => {
            res.redirect("/");
        });
});

router.put("/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, () => {
        res.redirect("/");
    });
});

module.exports = router;