
import { User } from "../models/user.model.js";



const registeruser = async(req,res)=>{
  try {
    const {username , email , fullname , password} = req.body
    if(!username || !email || !fullname || !password){
      return res.status(400).json({
        msg : " please eneter full details"
      })
    }

    //find in db
    const finduser = await User.findOne({
      $or : [{username},{email}]
    })

    //if user found
    if(finduser){
      return res.status(409).json({
        msg : "user already exist please login"
      })
    }
    
    //if not found
    const newuser = new User({
      username,
      password,
      fullname,
      email,
    })
    await newuser.save()

    return res.status(200).json({
      msg : " User Created Successfully",
      data : {
        username,
        email,
        avatar,
        coverimg,
      }
    })
  } catch (error) {
    return res.status(500).json({
      msg : "server error , unabel to create user"
    })
  }

}

export {registeruser}