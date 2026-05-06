import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    }
})
export const userModel=mongoose.model('user',userSchema)