import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import tutorPostRoute from "./routes/tutorPost.js";
import studentPostRoute from "./routes/studentPost.js"


const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL, {dbName:"Posts"} ).then(() =>{
    console.log("Connected to mongodb.")
})

app.use(express.json());

app.use("/api/tutor-posts",tutorPostRoute);
app.use("/api/student-posts",studentPostRoute);

app.get("/",(req,res)=> {
    res.send("Weclome Student.");
})


app.listen(3000,() =>{
    console.log("Server is running in port 3000.")
})