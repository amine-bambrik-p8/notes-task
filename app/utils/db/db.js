const mongoose = require('mongoose')
module.exports = async function connect(url,options={}){
    let connection;
    try {
        connection = await mongoose.connect(url,{...options,useNewUrlParser:true,useUnifiedTopology: true});
        
    } catch (error) {
        console.error(error);
    }
    return connection;
}