const axios = require('axios');
const express = require('express');
const app = express(); 
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/weather", function(req, res){
    var city = req.query.city;
    var country = req.query.country;
    
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=metric&appid=494458385636d62fc352b8339429e3a3";
    
    axios.get(url) // making a request for given url
    .then(function (response) {
        res.render("weather", {response: response});
    })
    .catch(function (error) {
        console.log(error); // print error, if any
    });
});

app.listen(3000, function(){
    console.log("Server has started");
})