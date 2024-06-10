import express from "express"
import dotenv from "dotenv"
import connectDb from "./db.js"
import authroute from "./routes/authroute.js"
import bodyParser from "body-parser"

connectDb()

dotenv.config()



const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/v1/auth",authroute)

const PORT=process.env.PORT||8001



app.get("/",(req,res)=>{
    res.send("haiiii")
})

app.listen(PORT,()=>{
    console.log(`server running on the port${PORT}`)
})