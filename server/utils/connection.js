import mongoose from "mongoose";
export const connection = (req, res) => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "aishala" })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("f");
      console.log(err);
    });
};
