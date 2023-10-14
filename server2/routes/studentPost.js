import express from "express";
import { deletePost, getPost, likePost, newPost, timelinePost, updatePost } from "../controllers/Post.js";
import {StudentPost} from "../models/StudentPost.js"

const router = express.Router();

//create a Post
router.post('/', (req,res) => newPost(req,res,StudentPost));

//update a Post 
router.put("/:id", (req,res) => updatePost(req,res, StudentPost));

// delete a Post
router.delete("/:id", async(req,res)=> deletePost(req,res, StudentPost))

 //Like a post
 router.put("/:id/like", async (req,res)=> likePost(req,res, StudentPost));

//get a Post
router.get("/:id", async(req,res)=> getPost(req,res, StudentPost));

//get timeline posts
router.get("/timeline/all", async(req,res)=> timelinePost(req,res, StudentPost));

export default router;