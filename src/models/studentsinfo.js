const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema1=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    
    emailid:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
}
    },
    age:{
        type:Number,
        required:true
    },
    mobileno:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    
})
const Studentdata=new mongoose.model('Studentdata',studentSchema1);
module.exports=Studentdata;