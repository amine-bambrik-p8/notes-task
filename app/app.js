const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router({
    mergeParams:true,
});
const routerSetup = require('./controllers');
const mongooseConnect = require('./utils/db/db');
app.use(bodyParser.urlencoded({
    extended:true,
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
mongooseConnect(process.env.MONGO_CONNECTION_STRING);
routerSetup(router);
app.use("/api",router);
app.use((req,res,next)=>{
    res.status(404)
        .json({
            message:'Not Found',
        });
});
app.use((err,req,res,next)=>{
    console.error(err);
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