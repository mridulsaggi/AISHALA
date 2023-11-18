import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tutorPostRoute from "./routes/tutorPost.js";
import studentPostRoute from "./routes/studentPost.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { dbName: "Posts" }).then(() => {
  console.log("Connected to mongodb.");
});

app.use(cookieParser());
app.use(
  cors({
    // Access-Control-Allow-Origin:*,
    // <<<<<<< HEAD
    origin: "http://localhost:3000", //upated
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true, //to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
  })
);

app.use("/api/tutor-posts", tutorPostRoute);
app.use("/api/student-posts", studentPostRoute);

app.get("/", (req, res) => {
  res.send("Weclome Student.");
});

app.listen(3002, () => {
  console.log("Server is running in port 3002.");
});
