const express = require("express");

//express() is a top-level function expressed by the express module
const app = express(); 


// '/' = localhost:3000 and request returns all the info made by the GET request || get() is a inbuilt method.
/*
app.get("/", function(request, response) {
    console.log(request); 
})
*/

/* 
=> request gets made at that home location > callback gets triggered > sends a text response
=> '/' specifies the route to GET */
app.get("/", function(request, response) {
    response.send("hello");  
})

app.get("/about", function(request, response) {
    response.send("This is about me");  
})

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffee</li><li>Code</li></ul>")
})

// '/contact' > res when user naviagtes to localhost:300/contact
app.get("/contact", function(req, res){
    res.send("<h1>Contact Me :)</h1>")
})


//We have created our server at port 3000. When we now run node server.js Our cmd will be listening to port 3000 and performs nothing
const port = 3000;
 app.listen(port, function() {
     console.log("server started on port 3000");
 }); 

