const express = require('express');
const http = require('http');


const app = express();
const router = express.Router({
    mergeParams:true,
});
const routerSetup = require('./controllers');
routerSetup(router);
app.use("/api",router);
app.use((req,res,next)=>{
    res.status(404)
        .json({
            message:'Not Found',
        });
});
app.use((err,req,res,next)=>{
    res.status(500)
        .json({
            error:'Something went very wrong!!',
        });
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server started at localhost:${port};Press Ctrl + C to Stop it.`);
});