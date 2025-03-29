const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.port;
const mongoose = require("mongoose");
const { userRouter } = require("./src/User/userRouter");


// Middleware
app.use(express.json());
app.use(cors({
    origin : `http://localhost:5173`,
    credentials : true
}))


// Router
app.use("/user" , userRouter);

app.get("/" , async(req , res) =>{
    res.send({
        success : true,
        message : "Job Portal Server Runing Success"
    });
});



async function main(){
    await mongoose.connect(process.env.mongodb_driver_url)
};

main().then(() =>{
    console.log("Mongoose Connected Sccess");
}).catch((error) =>{
    console.log("Mongoose Server Connection Error");
    console.log("Mongoose Connection Error massage" , error.message);
})

app.listen(port , () =>{
    console.log(`http://localhost:${port}`);
})