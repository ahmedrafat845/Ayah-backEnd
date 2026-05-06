
import express from "express"
import { addZekr, deleteAzkar, getAllAzkar, updateAzkar } from "./azkar.controller.js"

const azkarElSabahRouter=express.Router()

azkarElSabahRouter.post("/addZekrElSabah",addZekr)
azkarElSabahRouter.get("/getAllAzkarElSabah",getAllAzkar)
azkarElSabahRouter.put("/updateAzkarElSabah",updateAzkar)
azkarElSabahRouter.delete("/deleteAzkarElSabah",deleteAzkar)

export default azkarElSabahRouter