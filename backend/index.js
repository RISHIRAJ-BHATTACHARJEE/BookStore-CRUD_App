import express from 'express'
import { PORT, MongodbURI } from './config.js'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

//Middleware for handling body request
app.use(express.json())

//Middleware for handling cors
//1.
app.use(cors())

app.use('/books', booksRoute)

mongoose.connect(MongodbURI)
.then(()=>{
    console.log('Database Connected Successfully');
    app.listen(PORT, console.log(`Server running on port ${PORT}`))
})
.catch((err)=>{
    console.log(err);
})