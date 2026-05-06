import mongoose from "mongoose";

export const ahadithSchema= new mongoose.Schema({
    hadith:{
        type:String
    }
})
export const ahadithModel=mongoose.model("ahadith",ahadithSchema)