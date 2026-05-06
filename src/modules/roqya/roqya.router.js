
import express from "express"
import { addRoqya, deleteRoqya, getAllRoqya, updateRoqya } from "./roqya.controller.js"


const roqyaRouter=express.Router()

roqyaRouter.post("/addRoqya",addRoqya)
roqyaRouter.get("/getAllRoqya",getAllRoqya)
roqyaRouter.put("/updateRoqya",updateRoqya)
roqyaRouter.delete("/deleteRoqya",deleteRoqya)

export default roqyaRouter