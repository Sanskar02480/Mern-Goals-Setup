const mongoose =require('mongoose')

const userschema =mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Please add a name']
    },
      email:{
        type:String,
        required:[true , 'Please add a email']
    },
      password:{
        type:String,
        required:[true , 'Please add a password']
    }
    
})

module.exports =mongoose.model('User',userschema)