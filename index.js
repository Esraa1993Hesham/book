
import express from 'express'
import path from "path"
import connectionDB from './db/connectionDB.js'
import bookRouter from './src/modules/book/book.routes.js'
import autherRouter from './src/modules/auther/auther.routes.js'


const app=express()
app.use(express.json())
connectionDB()
app.use("/book",bookRouter)
app.use("/auther",autherRouter)


app.use("*",(req,res,next)=>{
res.status(404).json({msg:"sorry not found"})

})


app.listen(3000,()=>{

console.log("server is running")
})