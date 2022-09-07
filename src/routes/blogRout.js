const express = require("express");
const Router = express.Router();
const  { authToken } = require ("../middleware/authToken");
const { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog } = require ("../controller/blogCont");

Router.post("/createUserBlog",authToken,createBlog);
Router.get("/getAllBlogsPosted", getAllBlog);
Router.get("/getBlogOfSingleId",authToken, getSingleBlog);
Router.put("/updateBlog",authToken, updateBlog);
Router.delete("/deleteBlog", authToken , deleteBlog);

module.exports = Router;