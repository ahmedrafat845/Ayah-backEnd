import { ahadithModel } from "../../../dataBase/models/ahadith.model.js"

const addHadith=async(req,res)=>{
   let {hadith} = req.body
   let hadithIsAvailable = await ahadithModel.findOne({hadith})
   if(hadithIsAvailable){
    res.json({message:"hadith already added"})
   }else{
    await ahadithModel.insertMany({hadith})
    res.json({message:"success"})
   }
}
const getAllAhadith=async(req,res)=>{
    let allAhadith=await ahadithModel.find()
    res.json({message:"success",allAhadith})
}
const deleteHadith=async(req,res)=>{
    let {_id}=req.body
    let deletedHadith=await ahadithModel.findById({_id})
    if(deletedHadith){
        await ahadithModel.findByIdAndDelete({_id})
        res.json({message:"hadith deleted"})
    }else{
        res.json({message:"hadith not found"})

    }
}
const updateHadith=async(req,res)=>{
    let {_id,hadith}=req.body
   try{
    let ahadith=await ahadithModel.findById({_id})
    if(ahadith){
        let updatedHadith=await ahadithModel.findByIdAndUpdate({_id},{hadith},{new:true})
        res.json({message:"updated successffuly",updatedHadith})
    }else{
        res.json({message:"hadith not found"})
    }
   }catch(error){
    res.json({message:"server error"})
   }
}


export{
    addHadith,
    getAllAhadith,
    deleteHadith,
    updateHadith

}