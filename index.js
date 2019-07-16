const express = require("express")
const mongo = require('mongoose');
const app = express();
const bodyParser = require("body-parser")
require("./schemas/person")
const modelPerson = mongo.model("person")

require("dotenv").config({path: "./variables.env"})
mongo.connect(process.env.DATABASE)

mongo.connection.on("error", function(e){
    console.error(e);
})


app.use(bodyParser())



app.get("/", function(req, res){
    res.status(200)
})

app.get("/api", function(req, res){
    res.send("Welcome to the api.")
})

app.get("/newuser", function(req, res){
    const newPerson = new modelPerson(req.query)
    newPerson.save().then(function(){
        res.send("Person Saved!")
    }).catch(function(e){
        console.error(e)
        res.send(e)
    })
})






app.get("/users/search", function(req,res){
    const search = req.query    
    console.log(search)
    modelPerson.find(search).then(function(users){
        res.send(users);
    }).catch(function(e){
        console.error(e)
        res.send(e)
    })
})



app.listen("8000", function(){
    console.log("Started Listener from http://192.168.62.1:8000")
})