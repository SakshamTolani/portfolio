import mongoose from "mongoose";


export const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URI).then(c=>{
        console.log(`MongoDB Connected Successfully! ${c.connection.host}`);
    }).catch(err => console.log(err))
}