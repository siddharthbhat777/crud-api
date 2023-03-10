const Post = require('../models/post');

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ message: "All posts fetched successfully!", posts: posts });
    } catch (error) {
        console.log(error);
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const post = new Post({
            title: title,
            content: content
        });
        await post.save();
        res.status(201).json({ message: 'Created post successfully!', post: post });
    } catch (error) {
        console.log(error);
    }
};

exports.getPost = async (req, res, next) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId);
        res.status(200).json({ message: "Post fetched successfully!", post: post });
    } catch (error) {
        console.log(error);
    }
};

exports.updatePost = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const title = req.body.title;
        const content = req.body.content;

        const post = await Post.findById(postId);
        post.title = title;
        post.content = content;

        const result = await post.save();
        res.status(201).json({ message: "Post updated successfully!", post: result });
    } catch (error) {
        console.log(error);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        await Post.findByIdAndRemove(postId);
        res.status(200).json({ message: "Post deleted successfully!" });
    } catch (error) {
        console.log(error);
    }
};