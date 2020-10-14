const Notes = require('../models/notes/notes');
const mongoose = require('mongoose');

function findOne(id){
    return Notes.findById(id).lean().exec();
}
function findAll(){
    return Notes.find().lean().exec();
}
async function create(document){
    const note = new Notes(document);
    const newNote = await note.save();
    return newNote.toJSON();
}
async function update(id,document){
    const note = await Notes.findById(id);
    const newNote = await note.set(document).save();
    return newNote.toJSON();
}
async function remove(id){
    const note = await Notes.findById(id);
    const removedNote = await note.remove();
    return removedNote.toJSON();
}
module.exports = {findOne,create,findAll,update,remove};