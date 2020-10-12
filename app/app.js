const express = require('express');
const http = require('http');

const app = express();

app.get("/",(req,res)=>{
    res.status(200)
        .json({
            message:"Hello, World!",
        });
});


const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server started at localhost:${port};Press Ctrl + C to Stop it.`);
});