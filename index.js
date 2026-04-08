const express = require("express");

const app = express();
const port = 9000;

app.get("/",(req,res)=>{
    console.log("Got request sending answer now!!");
    res.send(`<h1>Hello, does this work?</h1>`);
})

app.listen(port,()=>{
    console.log(`Shit running on http://localhost:${port}`);
})
