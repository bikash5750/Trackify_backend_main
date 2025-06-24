import { Router } from "express";
import { registeruser , userlogin } from "../conrollers/user.controller.js"

const userrouter = Router();


userrouter.post("/api/v1/registeruser" , registeruser)

userrouter.post("/api/v2/userlogin" , userlogin)

export {userrouter};