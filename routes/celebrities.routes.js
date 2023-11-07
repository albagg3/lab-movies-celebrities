// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/create", (req, res) => {
    // res.send("new-celebrity")
    res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
    // res.send("new-celebrity")
    // const {celebrityName, celebrityOccupation, catchphrase} = req.body
    // console.log(celebrityName); 
    // Celebrity.create({name: celebrityName, occupation: celebrityOccupation,catchPhrase:catchphrase})
    res.render("celebrities/new-celebrity");
});


module.exports = router;