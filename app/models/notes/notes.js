const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const History = require('../../repositories/history');
const schema = new Schema({
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
},{
    timestamps:{
        createdAt:'createdAt',
        updatedAt:'updatedAt',
    },
    versionKey:"revision"
});

schema.pre('save', async function() {
    this.increment();
});
schema.post('save',async function(document){
    await History.update(document);
})
module.exports = model('notes',schema);