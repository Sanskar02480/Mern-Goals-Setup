const jwt =require('jsonwebtoken')
const bcrpyt =require('bcryptjs')
const asyncHandler =require('express-async-handler')
const User =require('../model/userModel')
const userModel = require('../model/userModel')


const registerUser =asyncHandler(async(req,res) =>{
    const {name , email , password}=req.body

    if(!name || !email || !password)
    { 
        res.status(400)
        throw new Error('Please fill all the fields')
    }

    const UserExists =await userModel.findOne({email})
    if(UserExists)
    {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt =await bcrpyt.genSalt(10)
    const hashedPassword =await bcrpyt.hash(password , salt)

    const user =await User.create({
        name ,
        email ,
        password :hashedPassword
    })  

    if(user)
    {
        res.status(201).json({
        id: user.id,
        name :user.name,
        email :user.email
    })
    }
    else
    {
        res.status(400)
        throw new Error('Invalid user data')
    }
    
})


const LoginUser =asyncHandler(async(req,res) =>{
    res.status(200).json({message:'Login User'})
})

const ShowUser =asyncHandler(async  (req,res) =>{
    res.status(200).json({message:'Show User'})
})

module.exports={
    registerUser,
    LoginUser,
    ShowUser
}