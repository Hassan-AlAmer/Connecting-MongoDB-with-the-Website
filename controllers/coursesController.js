const Courses=require('../models/courses')

exports.index= async (req, res, next)=>{
    try{               
        let courses= await Courses.find()
        .sort({createdAt:-1});
        res.send(courses);
    }catch(eror){
        next(eror)
    }
}
exports.show= async (req, res, next)=>{
    try{               
        let course= await Courses.findById({_id:req.params.id});
        res.send(course);
    }catch(eror){
        next(eror)
    }
}

exports.store=async(req, res,next)=>{
    try{                
        let course=new Courses();
        course.title=req.body.title;
        course.description=req.body.description;
        course.coursesStart=req.body.coursesStart;
        course.programDuration=req.body.programDuration;
        course =await course.save();

        res.send(course);
    }catch(err){
        next(err)
    }
}
exports.update=async(req, res,next)=>{
    try{
        
        let course= await Courses.findById(req.params.id);

        if(!course){
            const error=new Error("Wrong Request");
            error.statusCode=400;
            throw error;
        }
        course.title=req.body.title;
        course.description=req.body.description;
        course.coursesStart=req.body.coursesStart;
        course.programDuration=req.body.programDuration;   
        course =await course.save();

        res.send(course);
    }catch(err){
        next(err)
    }
}
exports.delete=async(req, res,next)=>{
    try{
       
        let course= await Courses.findById(req.params.id);
        if(!course){
            const error=new Error("Wrong Request");
            error.statusCode=400;
            throw error;
        }
        course =await course.delete();

        res.send({message:"success"});
    }catch(err){
        next(err)
    }
}
exports.deleteAll=async(req, res,next)=>{
    try{
        Courses.remove().exec();
        res.send({message:"success"});
    }catch(err){
        next(err)
    }
}