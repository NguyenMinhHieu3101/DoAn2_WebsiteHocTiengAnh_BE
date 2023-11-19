const express = require("express");
const {createPost, getPost, getPosts, deletePost, updatePost,
    createComment, getComment, deleteComment, updateComment,
    createCategory, getCategory, deleteCategory, updateCategory
   } = require("../controllers/blogController");

const router = express.Router();

router.post("/posts", createPost)
router.get("/posts/:id",getPost)
router.get("/posts",getPosts)
router.delete("/posts/:id",deletePost)
router.put("/posts/:id",updatePost)


router.post("/comments", createComment)
router.get("/comments/:id",getComment)
router.delete("/comments/:id",deleteComment)
router.put("/comments/:id",updateComment)

router.post("/categories", createCategory)
router.get("/categories/:id",getCategory)
router.delete("/categories/:id",deleteCategory)
router.put("/categories/:id",updateCategory)




module.exports = router;