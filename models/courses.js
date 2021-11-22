const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const CoursesSchema=new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    coursesStart:{type:String, required:true},
    programDuration:{type:String, required:true},
    createdAt: {type:Date, default:Date.now()},
})

module.exports=mongoose.model('courses', CoursesSchema)