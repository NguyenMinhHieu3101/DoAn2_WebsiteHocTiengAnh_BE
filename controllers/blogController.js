const Post = require("../models/postModel");
const moment = require('moment');
const Comment = require("../models/commentModel");
const Category = require("../models/categoryModel");
const User = require("../models/userModel");

const createPost = async (req, res) => {
  const { title, description, numViews, likes, dislikes, photo } = req.body;
  const newPost = new Post({
    title,
    description,
    numViews,
    likes,
    dislikes,
    photo,
  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPosts = async (req, res) => {
    try {
      const posts = await Post.find({});
      const customedPosts = await Promise.all(
        posts.map(async (post) => {
          const user = await User.findById(post.user);
  
         const comments = await Comment.find({ post: post._id.toString() });
  
          const formattedComments = await Promise.all(
            comments.map(async (comment) => {
              const commenter = await User.findById(comment.user);
              return {
                comment_id: comment._id.toString(),
                comment_time: moment(comment.createdAt).format('DD/MM/YYYY HH:mm'),
                comment_content: comment.content || '',
                commenter_name: commenter ? commenter.name : null,
                commenter_img: commenter ? commenter.image : null,
              };
            })
          );
  
          return {
            post_id: post._id.toString(),
            post_content: post.description,
            post_time: moment(post.createdAt).format('DD/MM/YYYY HH:mm'),
            post_image: post.photo,
            author_name: user ? user.name : null,
            author_img: user ? user.image : null,
            comments: formattedComments,
          };
        })
      );
  
      res.status(200).json(customedPosts);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createComment = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost,
  createComment,
  getComment,
  deleteComment,
  updateComment,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
};