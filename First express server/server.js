"use strict"

const express = require("express");

const app = express();

app.get("/", function(request, response){
        
    response.send("<h1>My first web server.</h1>");          // response when browser make request to home route of this server
});

app.get("/contact", function(req, res){
    
    res.send("Contact me at : imchandan1947@gmail.com");
});

app.listen(3000, function(){               // server listens to this port 3000, also you can choose any port 

     console.log("Server listening at port 3000 i.e, home root")
});

// 1. To start this server, cd to curr dir, "node server.js" in terminal
//    server started can be identified by stopped terminal

// 2. Go to browser, make a request to current port 3000 i.e, home, using "localhost:3000"
//    if server wouldn't have been started in previous step..the browser will not get any data and will show error

// 3. To stop the server just type "ctrl + c"  in terminal
//    to auto start server every time..nodemon utility can be used 

