const express = require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const config=require('./config');
const errorHandler=require('./middlewares/errorHandlers')
const coursesRoute=require('./routes/courses')
const app=express();


mongoose.Promise=global.Promise;
mongoose.connect(config.mongoURI, {useNewUrlParser:true})

app.use(bodyParser.json());

app.use("/api/courses/",coursesRoute);
app.use(errorHandler);

app.listen(config.port,()=>{
    console.log("Listening");
})