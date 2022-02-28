const express =require("express");
require("../src/db/conn");
const Student=require("../src/models/students");
const Studentdata=require("../src/models/studentsinfo");
const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.post("/students",async(req,res)=>{
    try{
        const addingstudentrecord=new Student(req.body);
         console.log(req.body);   
        const insertstudentdata =await addingstudentrecord.save();
        res.send(insertstudentdata);
}
    catch(e){
        res.send(e);
}})
app.get("/students",async(req,res)=>{
    try{
       const getstudentdata=await Student.find({});
       res.send(getstudentdata);
}
    catch(e){
        res.send(e);
    }})

    app.post("/studentsinfo",async(req,res)=>{
        try{
            const addingstudentrecord=new Studentdata(req.body);
             console.log(req.body);   
            const insertstudentdata =await addingstudentrecord.save();
            res.send(insertstudentdata);
    }
        catch(e){
            res.send(e);
    }})
    app.get("/studentsinfo",async(req,res)=>{
        try{
           const getstudentinfo=await Studentdata.find({});
           res.send(getstudentinfo);
    }
        catch(e){
            res.send(e);
        }})
   //console.log(req.body);const user=new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//      }).catch((e)=>{
//         res.status(400).send(e);
    // })
app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
 })