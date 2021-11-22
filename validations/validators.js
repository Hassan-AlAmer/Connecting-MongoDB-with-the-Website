const {body}=require('express-validator')

exports.hasDescription=body('description')
    .isLength({min:5})
    .withMessage("Description is Required. Min 5")

exports.hasTitle=body('title')
    .isLength({min:5})
    .withMessage("Title is Required. Min 5")

exports.hasCoursesStart=body('coursesStart')
    .isLength({min:10})
    .isDate()
    .withMessage("Courses Start is Required. Date Format. Min 10.")

exports.hasProgramDuration=body('programDuration')
    .isLength({min:5})
    .withMessage("Program Duration is Required. Min 5")