var express = require("express");
var router = express.Router();
var db = require("../models");

// Here will be all the routes and the logic within each individual route as needed

router.get("/", (req, res) => {
    db.Burger.findAll({
    }).then(function (dbBurger) {
        res.render("index",
            {
                burgers: dbBurger
            });
    });
});

router.post("/", (req, res) => {
    db.Burger.create(req.body).then((dbBurger) => {
        res.redirect("/");

    });
});

router.put("/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Burger.update({
        devoured: true,
    },
        {
            where: {
                id: req.params.id
            }
        }).then((dbBurger) => {
            res.redirect("/");
        });
});

router.delete("/:id", (req, res) => {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbBurger) {
        res.redirect("/")
    });
});

module.exports = router;