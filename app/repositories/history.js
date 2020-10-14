const History = require('../models/history/history');
async function findOne(id){
    const history = await History.find({id}).lean().exec();
    return history;
}
async function update(document){
    let {_id,createdAt,updatedAt,...note} = document.toJSON();
    note = {...note,id:_id};
    const history = new History(note);
    await history.save();
    console.log(await History.find());
}
async function clearHistory(){
    await History.deleteMany({});
}
module.exports = {findOne,update,clearHistory};