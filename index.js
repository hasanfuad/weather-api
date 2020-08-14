const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res)
{   
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=33c14bacfecc1e313fdc3a8f6b72bba0&units=metric"

    https.get(url, function(response){
        response.on("data", function(data){
            const weather = JSON.parse(data);
            const weatherData = weather.main.temp;
            res.send("This is the temp: "+weatherData)
        })
    })
    
})



app.listen(3000, function(){
    console.log("server is running!!");
































// const express = require("express");

// const https = require("https");
// const { json } = require("express");
// const bodyParser = require("body-parser");
// const { urlencoded } = require("body-parser");
// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));



// app.get("/", function(req, res){
    

//     res.sendFile(__dirname+"/index.html");

// })

// app.post("/", function(req, res){
//     console.log(req.body.input);

//     const cityName = req.body.input;
//     const apiKey = "33c14bacfecc1e313fdc3a8f6b72bba0";
//     const unit = "metric";
//     const url ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units="+unit+"";
//     https.get(url, function(response){

//     response.on("data", function(data){
//         const weather = JSON.parse(data);
//         const weatherData = weather.main.temp;
//         const weatherDes = weather.weather[0].description;
//         const icon = weather.weather[0].icon;
//         const imgURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png"

//         res.write("<h1>The current temp in "+cityName+" is "+weatherData+" celcius</h1>");
//         res.write("<p>"+weatherDes+"</p>")
//         res.write("<img src="+imgURL+">")
//         res.send()
//     })
// })
// })

// app.listen(3000, function(){
//     console.log("server is running");
// })




