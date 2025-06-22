
import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true,
  },
  avatar : {
    type : String,
    required : true,
  },
  fullname : {
    type : String,
    required : true,
    unique : true,
  },
  categories : [{
    type : Schema.Types.ObjectId,
    ref : "Category",
  }],
  password : {
    type : String,
    required : [true , "password is required"]
  }
 
},{ timestamps : true})


export const User = mongoose.model("User" , UserSchema)
