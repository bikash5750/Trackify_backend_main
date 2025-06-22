import express from "express"
import config from "./utils/config.js"
import {connectdb} from "./src/connectdb/connectdb.js"

const app = express()

connectdb().then(()=>{
  app.listen(3000 ,()=>{
    console.log("your application is running on PORT 3000")
  })
})
.catch(()=>{
  console.log("unable to load port")
})