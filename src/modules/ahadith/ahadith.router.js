import express from "express"
import { addHadith, deleteHadith, getAllAhadith, updateHadith } from "./ahadith.controller.js"

let hadithRouter=express.Router()


hadithRouter.get('/getAllAhadith',getAllAhadith)
hadithRouter.post('/addHadith',addHadith)
hadithRouter.delete('/deleteHadith',deleteHadith)
hadithRouter.put('/updateHadith',updateHadith)



export default hadithRouter