const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const schema = new Schema({
    id:{
        type:Schema.Types.ObjectId,
        ref:'notes',
        required:true,
    },
    title: {
        type: String,
        required: true,
        maxlength: 255,
    },
    content: {
        type: String,
        required: true,
        maxlength: 500,
    },
    revision: {
        type: Number,
        default:0,
    }
},{
    timestamps:{
        createdAt:'createdAt',
    }
});

module.exports = model('history',schema);
