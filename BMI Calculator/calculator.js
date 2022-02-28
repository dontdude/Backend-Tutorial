"use strict"

const express  = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function(req, res){

    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);

    var bmi = w/(h*h);

    res.send("Your Body Mass Index (BMI) is : " + bmi);
});

app.get("/", function(req, res){

    res.sendFile(__dirname + "/bmi.html");
});

app.listen(3000, function(){

    console.log("Calculator server listening at port 3000");
});
