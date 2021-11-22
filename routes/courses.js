const express = require('express');
const router=express.Router();
const coursesController=require('../controllers/coursesController');
const {hasTitle, hasDescription, hasCoursesStart, hasProgramDuration}=require('../validations/validators')

router.get('/', coursesController.index);
router.get('/:id', coursesController.show);
router.post('/',[hasTitle, hasDescription, hasCoursesStart, hasProgramDuration] ,coursesController.store);
router.patch('/:id', coursesController.update);
router.delete('/', coursesController.deleteAll);
router.delete('/:id', coursesController.delete);


module.exports =router;