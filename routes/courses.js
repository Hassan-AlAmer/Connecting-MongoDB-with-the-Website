const express = require('express');
const router=express.Router();
const coursesController=require('../controllers/coursesController');

router.get('/', coursesController.index);
router.get('/:id', coursesController.show);
router.post('/', coursesController.store);
router.patch('/:id', coursesController.update);
router.delete('/', coursesController.deleteAll);
router.delete('/:id', coursesController.delete);


module.exports =router;