import cors from 'cors'
import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import bodyParser from 'body-parser'

import router from './routes/routers.js'

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(cors())

const dbname = "flightbook"
const CONNECTION_URL = `mongodb://0.0.0.0:27017/${dbname}`

mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log('mongoose connected')))
.catch(error=> console.log(error.message))

app.use('/skyview',router)