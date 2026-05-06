import { roqyaModel } from "../../../dataBase/models/roqya.model.js"


const addRoqya=async(req,res)=>{
    const {title,roqya,count,numOfRoqya} = req.body
   try{
    let Roqya = await roqyaModel.findOne({roqya})
    if(Roqya){
        res.json({message:"Roqya already added"})
    }else{
        await roqyaModel.insertMany({title,roqya,count,numOfRoqya})
        res.json({message:"success"})
    }
   }catch(error){
    res.json({message:"server error"})
   }
}
const getAllRoqya=async(req,res)=>{
   try{
    let allRoqya=await roqyaModel.find()
    res.json({message:"success",allRoqya})
   }catch(error){
    res.json({message:"server error"})
   }
}

const updateRoqya=async(req,res)=>{
    const {title,roqya,count,numOfRoqya,_id} = req.body
   try{
    let Roqya = await roqyaModel.findById({_id})
    if(Roqya){
      let updateRoqya=await roqyaModel.findByIdAndUpdate({_id},{title,roqya,count,numOfRoqya},{new:true})
      res.json({message:"updated successffuly",updateRoqya})
    }else{
        res.json({message:"Rogya not found"})
    }
   }catch(error){
    res.json({message:"server error"})
   } 
}
const deleteRoqya=async(req,res)=>{
    const {_id} = req.body
   try{
    let deletedRoqya=await roqyaModel.findById({_id})
    if(deletedRoqya){
        await roqyaModel.findByIdAndDelete({_id})
        res.json({message:"deleted successffuly"})
    }else{
        res.json({message:"Roqya not found"})
    }
   }catch(error){
    res.json({message:"server error"})
   }
}

export{
    addRoqya,
    getAllRoqya,
    updateRoqya,
    deleteRoqya
}