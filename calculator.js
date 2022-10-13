const express = require("express");
const bodyParser = require("body-parser");
// var cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);


    res.send("The sum is" + (num1+num2));
});
app.listen(8080 ,console.log("this is running"));