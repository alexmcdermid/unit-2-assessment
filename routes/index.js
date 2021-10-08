var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/indexCtrl');


router.get('', indexCtrl.index)
router.get('/', indexCtrl.index);

router.post('/', indexCtrl.createTodo)

router.get('/:id', indexCtrl.deleteTodo)


module.exports = router;
