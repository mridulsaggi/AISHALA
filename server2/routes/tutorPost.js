import express from "express";
import { deletePost, getPost, likePost, newPost, timelinePost, updatePost } from "../controllers/Post.js";
import {TutorPost} from "../models/TutorPost.js"

const router = express.Router();

//create a Post
router.post('/', (req,res) => newPost(req,res,TutorPost));

//update a Post 
router.put("/:id", (req,res) => updatePost(req,res,TutorPost));

// delete a Post
router.delete("/:id", async(req,res)=> deletePost(req,res, TutorPost))

 //Like a post
 router.put("/:id/like", async (req,res)=> likePost(req,res,TutorPost));

//get a Post
router.get("/:id", async(req,res)=> getPost(req,res,TutorPost));

//get timeline posts
router.get("/timeline/all", async(req,res)=> timelinePost(req,res,TutorPost));

export default router;