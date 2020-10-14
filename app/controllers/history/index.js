const {readOne,removeAll} =  require('./controller');
const {Router} = require('express');
const router = Router({
    mergeParams: true,
});

router.get('/:id',readOne);
router.delete('/',removeAll);
module.exports = router;
