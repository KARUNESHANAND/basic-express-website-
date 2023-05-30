const express = require("express");
const app = express();

app.get("/", function(req,response){
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req,response){
    response.send("<h2>Contact Me :</h2><h3>E-mail : karuneshanandg@gmail.com</h3>");
    
});

app.get("/about", function(req,response){
    response.send("<p>Hello my name is Karunesh Anand</p>");
    
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});