import express from "express";
import fs from "fs";
const application = express();

// HTTP | GET POST PUT/PATCH DELETE

// req > client to server
// res > server to client
application.get("/", function(req, res){
    res.send("Hello World!!!")
})

application.get("/people", function(req, res){
    fs.readFile("./demo/library.json", "utf-8", (err, data)=>{
        if(err) {
            res.send("Error in server code.")
            return false
        }
        res.json(JSON.parse(data));
    })
})


// https://example.com - /
// https://example.com/people - /people

application.listen(3001, ()=>{
    console.log("Server started!!!")
})
