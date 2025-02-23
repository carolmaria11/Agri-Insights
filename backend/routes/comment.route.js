import express from "express";
import {
  addComment,
  deleteComment,
  getPostComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

// Fetch comments for a specific post
router.get("/:postId/comments", getPostComments);

// Add a comment to a specific post
router.post("/:postId/comments", addComment);

// Delete a specific comment
router.delete("/:postId/comments/:commentId", deleteComment);

export default router;
