const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    rollnumber:{
        type:Number,
        min:5,
        required:true,
        unique:true

    }})
    
//create new collection
const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;

