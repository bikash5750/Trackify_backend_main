import { v2 as cloudinary} from "cloudinary"
import fs from "fs"
import config from "./config.js";


// console.log("Loaded API_KEY from config:", config.API_KEY);
// console.log("Loaded CLOUD_NAME from config:", process.env.CLOUD_NAME);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadtocloudinary = async (localfilepath)=>{
  try {
    if(!localfilepath) return null;
    const responce = await cloudinary.uploader.upload(localfilepath);
    fs.unlinkSync(localfilepath);
    return responce.secure_url;
    
  } catch (error) {
    console.error("upload to cloudinary error" , error)
    return console.log("unable to upload to cloudinary")
  }
}

export {uploadtocloudinary}