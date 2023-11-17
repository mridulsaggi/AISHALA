import express, { urlencoded } from "express";
import cp from "cookie-parser";
import { connection } from "./utils/connection.js";
// <<<<<<< HEAD
import cors from "cors";
import router from "../server/routers/authrouter.js";
import tutorrouter from "../server/routers/tutorPost.js";
import dotenv from "dotenv";
import studentrouter from "../server/routers/studentPost.js";
const app = express();
// =======
// import cors from "cors";
// import router from "../routers/authrouter.js";
// import tutorrouter from "../routers/tutorPost.js";
// import dotenv from "dotenv";
// import studentrouter from "../routers/tutorPost.js";
// const app = express();
// >>>>>>> 75a12ddbee6410981d5b0c581ed9e404292e7d07
// dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connection();
app.use(cp());
app.use(
  cors({
    // Access-Control-Allow-Origin:*,
    // <<<<<<< HEAD
    origin: "http://localhost:3000", //upated
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true, //to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
  })
);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/tutor-posts", tutorrouter);
app.use("/api/student-posts", studentrouter);
app.use(router);
app.listen(3001, () => {
  console.log("server running on port 3001");
});
// =======
//     origin: "*", //upated
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     credentials: true, //to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
//   })
// );
// app.get("/", (req, res) => {
//   res.send("hello");
// });
// app.use("/api/tutor-posts", tutorrouter);
// app.use("/api/student-posts", studentrouter);
// app.use(router);
// app.listen(3000, () => {
//   console.log("server running on port 3000");
// });
// >>>>>>> 75a12ddbee6410981d5b0c581ed9e404292e7d07
