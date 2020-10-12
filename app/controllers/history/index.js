const {readOne} =  require('./controller');
const {Router} = require('express');
const router = Router({
    mergeParams: true,
});

router.get('/:id',readOne);

module.exports = router;
