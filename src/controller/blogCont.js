const Blogs = require("../models/blogSchema");

//to create new blog :
const createBlog = async(req,res) => {
    try{
        let Blog = {
            userId : req.body.userId,
            tittle : req.body.tittle,
            body   : req.body.body,
            tags   : req.body.tags,    
        }
        const savedBlog = await Blogs.create(Blog);
        res.status(200).send({savedBlog:savedBlog, msg: "blog added successfully"});
    }catch(error){
        res.send({msg :"Something went wrong", error});
    }
}

//to get all blogs post:
const getAllBlog = async (req,res) => {
    try{
        const blog = await Blogs.find({});
        res.status(200).send(blog);
    }catch(error){
        res.send(error ,{msg :"Something went Wrong"});
    }
}


// to get single Blog of a particular User;
const getSingleBlog = async (req,res) => {
    try{
        const blog = await Blogs.findOne({userId :req.body.userId});
        res.status(200).send(blog);
    }catch(error){
        res.send({msg :"Something went Wrong",error});
    }
}


//to update particular user blog :
const updateBlog = async(req,res) => {
    try{
        const blog = await Blogs.findById(req.body._id);
        if (req.userLogin._id === blog.userId.toString()){
            const updatedPost = await Blogs.findByIdAndUpdate(
                req.body._id,
                req.body,
                {new : true}
            );
            res.status(200).send({msg:"The blog is Updated"});
            console.log(updatedPost);
        }else{
            res.status(400).send({error: "You can only Update your post!"});
        }
    }catch(error){
        res.send({msg :"No blog updated",error});
    }
}   


//to delete the blog:
const deleteBlog = async(req,res) => {
    try{
        const blog = await Blogs.findById(req.body._id);
        if(req.userLogin._id === blog.userId.toString()){
                await blog.delete();   
                res.status(200).send({msg:"The blog is deleted"});    
        }else{
            res.status(400).send({error: "You can only delete your post!"})
        }
    }catch(error){
        res.send({msg :"Not Deleted", error});
    }
}

module.exports = { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog };