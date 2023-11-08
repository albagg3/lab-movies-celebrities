// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/create", (req, res) => {
    // res.send("new-celebrity")
    res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
    // res.send("new-celebrity")
    try{
        const {celebrityName, celebrityOccupation, catchphrase} = req.body
        // console.log(celebrityName); 
        const response = await Celebrity.create({name: celebrityName, occupation: celebrityOccupation, catchPhrase:catchphrase})
        // res.render("celebrities/new-celebrity");
        res.render("celebrities/celebrities.hbs")
        console.log("RESPONSE",response);
    }
    catch(error){
        console.error("This is an error",error);
        res.render("celebrities/new-celebrity.hbs")
    }
});


module.exports = router;