import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import hizmetRoute from "./routes/hizmetlerRoute.js"

dotenv.config()
const app = express()


const connect = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log();
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

/* mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
}) */

// middlewares

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/hizmetler",hizmetRoute)



app.listen(5500, ()=>{
    connect()
    console.log("connected");
})