const express = require("express");
const bodyParser = require('body-parser');

const app = express(); // function call

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/about", function(req, res) {
    res.send("I am a web developer:)")
});
app.get("/contact", function(req, res) {
    res.send("If you have any qyeries contact me on this number:)")
});
app.get("/calculator", function(req, res) {
    //console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});
app.post("/calculator", function(req, res) {
    // res.send("Thank you for your lovely post");
    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;
    res.send("The sum of the two number is :" + sum);
});
// ab hme kya krna hai ki khud ka server create krna hai
// server ko create karne k liye we need to create a method called listen
app.listen(3000, function(req, res) {
    console.log("Server is running at port no. 6000");
});