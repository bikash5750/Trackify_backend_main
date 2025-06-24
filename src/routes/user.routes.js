import { Router } from "express";
import { registeruser } from "../conrollers/user.controller.js"

const userrouter = Router();


userrouter.post("/api/v1/registeruser" , registeruser)

export {userrouter};