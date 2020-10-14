const {readAll,readOne,createOne,updateOne,deleteOne} = require('./controller');

const {Router} = require("express");
const router = Router({
    mergeParams:true,
});
router.get('/',readAll);
router.get('/:id',readOne);
router.post('/',createOne);
router.put('/:id',updateOne);
router.delete('/:id',deleteOne);
module.exports =  router;