const History = require('../../repositories/history');
async function readOne(req,res,next){
    const {id} = req.params;
    try {
        const history = await History.findOne(id);
        if(!history.length){
            return res.status(404)
                        .json({
                            error:{
                                message:"Not Found",
                            },
                        });
        }
        res.status(200)
            .json({
                data:{
                    ...history,
                },
            });
    } catch (error) {
        next(error);
    }
}

async function removeAll(req,res){
    try {
        await History.clearHistory();
        res.status(200)
            .json({
                data:{
                    message:"Clean History",
                },
            });
    } catch (error) {
        next(error);
    }
}

module.exports =  {readOne,removeAll};