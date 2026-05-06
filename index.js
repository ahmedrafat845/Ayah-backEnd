import express from 'express'
import { dbConnection } from './dataBase/dbConnection.js'
import userRouter from './src/modules/users/user.router.js'
import azkarElSabahRouter from './src/modules/azkarElSabah/azkar.router.js'
import azkarElmasaaRouter from './src/modules/azkarElmasaa/azkarElmasaa.router.js'
import hadithRouter from './src/modules/ahadith/ahadith.router.js';
import roqyaRouter from './src/modules/roqya/roqya.router.js'
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();
const app = express()
const port = 3000



app.use(cors())
app.use(express.json())
app.use('/users',userRouter)
app.use('/azkarElSabah',azkarElSabahRouter)
app.use('/azkarElmasaa', azkarElmasaaRouter)
app.use('/ahadith',hadithRouter)
app.use('/roqya',roqyaRouter)


dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))