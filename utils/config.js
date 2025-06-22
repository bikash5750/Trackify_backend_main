import dotenv from "dotenv"
dotenv.config({path : "./.env"})

export default {
  DB_URI: process.env.DB_URI,
};