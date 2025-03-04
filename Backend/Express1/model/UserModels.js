

const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    firstName:String,
    email:{type:String,unique:true},
    password:String,
    isVerified:{
        type:Boolean,default:false
    }
},{timestamps:true})
const UserModels=new mongoose.model('users',studentSchema)
module.exports=UserModels