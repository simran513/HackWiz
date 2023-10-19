const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connect=async()=>{
    const options={
        useCreateIndex:true,
        useNewUrlParser:true,  
        useUnifiedTopology:true,
        useFindAndModify:false
    }
    try
    {
        // await mongoose.connect("mongodb://localhost:27017/yuki");
        await mongoose.connect(process.env.mongo_url)
        console.log("Connection is sucessful");
    }
    catch(error)
    {
        console.log("No connection");
    } 
}

module.exports={connect}