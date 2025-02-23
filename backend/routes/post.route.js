import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisit.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/post/:slug", increaseVisit, getPost); // More specific
router.post("/", createPost);
router.delete("/post/:id", deletePost); // Avoids conflict with `:slug`
router.patch("/post/feature", featurePost); // More explicit

export default router;
