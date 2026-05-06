
import express from "express"
import { addZekr, deleteAzkar, getAllAzkar, updateAzkar } from "./azkarElmasaa.controller.js"

const azkarElmasaaRouter = express.Router()

azkarElmasaaRouter.post("/addZekrElmasaa", addZekr)
azkarElmasaaRouter.get("/getAllAzkarElmasaa", getAllAzkar)
azkarElmasaaRouter.put("/updateAzkarElmasaa", updateAzkar)
azkarElmasaaRouter.delete("/deleteAzkarElmasaa", deleteAzkar)

export default azkarElmasaaRouter