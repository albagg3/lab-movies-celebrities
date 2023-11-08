// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here



router.get("/", async(req, res) => {
    try{
        const celebrityArr = await Celebrity.find()
        console.log(celebrityArr);
        res.render("celebrities/celebrities",{celebrityArr});
    }
    catch(error){
        console.error(error);
    }
});

router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
    try{
        const {celebrityName, celebrityOccupation, catchphrase} = req.body
        const response = await Celebrity.create({name: celebrityName, occupation: celebrityOccupation, catchPhrase:catchphrase})
        res.render("celebrities/celebrities.hbs")
        console.log("RESPONSE",response);
    }
    catch(error){
        console.error("This is an error",error);
        res.render("celebrities/new-celebrity.hbs")
    }
});

module.exports = router;