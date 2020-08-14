const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    
    

        const query = req.body.input;
        const apiKey = "33c14bacfecc1e313fdc3a8f6b72bba0";
        const unit = "metric";
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit+"";
    
            https.get(url, function(response){
                response.on("data", function(data){
                    const weatherData = JSON.parse(data);
                    const temp = weatherData.main.temp;
                    const des = weatherData.weather[0].description;
                    const icons = weatherData.weather[0].icon
                    const imgURL = "https://openweathermap.org/img/wn/"+icons+"@2x.png";
    
                        res.write("<h1 style =  color:red> <span style= color:lightGreen> "+query+"</span> Temp is "+temp+"</h1>");
                        res.write("<h2 style = color:cyan>"+des+"</h2>");
                        res.write("<img src="+imgURL+">");
    
                        res.send();
                })
            })

})

app.get("/", function(req, res)
{   
    
})
        app.listen(3000, function(){
            console.log("Server is running!");
        })

        