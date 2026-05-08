import { userModel } from "../../../dataBase/models/user.model.js"


export const login=async(req,res)=>{
    const {name}=req.body
    let token=name
    await userModel.insertMany({name})
    res.status(201).json({message:"success",token})

}