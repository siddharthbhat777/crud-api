const express = require('express');

const crudController = require('../controllers/crud');

const route = express.Router();

route.get('/posts', crudController.getPosts);

route.post('/post', crudController.createPost);

route.get('/post/:postId', crudController.getPost);

route.put('/post/:postId', crudController.updatePost);

route.delete('/post/:postId', crudController.deletePost);

module.exports = route;