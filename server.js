const express=require("express")
const cors=require("cors")
const connectDB=require("./mongo")
const User=require("./userSchema")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extende:true}))
app.use(cors())
const jwt=require("jsonwebtoken")  
const bcrypt=require("bcrypt")
const mongoose=require("mongoose")

const authRoutes = require('./routes')

app.use(authRoutes)

// app.post('/',async(req, res)=> {
//     const newUser = new User({
//         email:req.body.email,
//         username:req.body.username,
//         password:req.body.password,
//     });
//     try{
//         await newUser.save()
//         res.status(201).json({ message: 'user created succesfully'})
//     }catch(error){
//         res.status(500).json({ error: 'failed to create user'})
//     }
// })
connectDB()
    .then(()=>{
        app.listen(8000,()=>{
            console.log("port connected to 8000")
        });
    })
    .catch((error)=>{
        console.error('error connecting to the database',error)
    })