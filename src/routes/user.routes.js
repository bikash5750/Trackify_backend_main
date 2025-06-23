import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { registeruser } from "../conrollers/user.controller.js"

const userrouter = Router();


userrouter.post("/api/v1/registeruser" ,upload.single("avatar"), registeruser)

export {userrouter};