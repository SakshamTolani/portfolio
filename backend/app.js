import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import {getFilename, getDirname} from './utils.js';
export const app = express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

if(process.env.NODE_ENV == "production"){
    const __filename = getFilename(import.meta.url);
    const __dirname = getDirname(import.meta.url);
    app.use(express.static(__dirname,'frontend/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}