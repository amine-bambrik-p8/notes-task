const Notes = require('../../repositories/notes');
async function readAll(req,res,next){
    try {
        const notes = await Notes.findAll();
        res.status(200)
            .json({
                data:notes,
            });
    } catch (error) {
        next(error);
    }
}
async function readOne(req,res,next){
    const {id} = req.params;
    try {
        const note = await Notes.findOne(id);
        if(!note){
            return res.status(404)
                .json({
                    error:{
                        message:'Not Found',
                    }
                });

        }
        res.json({
            data:{
                ...note,
            },
        });
    } catch (error) {
        next(error);
    }
}
async function createOne(req,res,next){
    const {data:note} = req.body;
    try {
        const newNote = await Notes.create(note);
        res.status(201)
                    .json({
                        data:{
                            ...newNote,
                        },
                    });
    } catch (error) {
        next(error);
    }
}
async function updateOne(req,res,next){
    const {data:note} = req.body;
    const {id} = req.params;
    try {
        const oldNote = await Notes.findOne(id);
        if(!oldNote){
            return res.status(404)
                        .json({
                            error:{
                                message:"Not Found",
                            },
                        });
        }
        const newNote = await Notes.update(id,note);
        res.status(200)
                    .json({
                        data:{
                            ...newNote,
                        },
                    });
    } catch (error) {
        next(error);
    }
}
async function deleteOne(req,res,next){
    const {id} = req.params;
    try {
        const oldNote = await Notes.findOne(id);
        if(!oldNote){
            return res.status(404)
                        .json({
                            error:{
                                message:"Not Found",
                            },
                        });
        }
        const note = await Notes.remove(id);
        res.status(200)
            .json({
                data:{
                    ...note,
                },
            });
    } catch (error) {
        next(error);
    }
}

module.exports = {readAll,readOne,createOne,updateOne,deleteOne};