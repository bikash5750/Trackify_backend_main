import express from "express"
import CookieParser from "cookieparser"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({origin : process.env.cors_origin}))
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
export {app}