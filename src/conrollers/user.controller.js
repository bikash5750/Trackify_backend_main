import { User } from "../models/user.model.js";
import { zodPasswordSchema } from "../models/user.model.js";

const registeruser = async (req, res) => {
  try {
    const { username, email, fullname, password } = req.body;
  
    if (!username || !email || !fullname || !password) {
      return res.status(400).json({
        msg: " please eneter full details",
      });
    }
    // console.log(req.body)

    //zod validation
   const passwordValidation = zodPasswordSchema.safeParse(password);

if (!passwordValidation.success) {
  return res.status(400).json({
    msg: "password min of contain 1 upper 1 lower ans 1 special character"
  });
}


    //find in db
    const finduser = await User.findOne({
      $or: [{ username }, { email }],
    });

    //if user found
    if (finduser) {
      return res.status(409).json({
        msg: "user already exist please login",
      });
    }

    const{avatar} = req.body
    if(!avatar){
      return res.status(400).json({
        msg : "please upload avatar"
      })
    }
    

     if(!avatar){
      return res.status(500).json({
        msg : "unable to upload to cloudinary"
      })
     }

    //if not found
    const newuser = new User({
      username,
      password,
      fullname,
      email,
      avatar 
    });
    await newuser.save();

    return res.status(200).json({
      msg: " User Created Successfully",
      data: {
        username,
        email,
        fullname,
        avatar
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "server error , unable to create user" + error,
    });
  }
};

export { registeruser };
