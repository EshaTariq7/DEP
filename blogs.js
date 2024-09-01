const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

// INDEX - Show all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.render('index', { blogs });
    } catch (err) {
        res.status(500).send(err);
    }
});

// NEW - Show form to create a new blog
router.get('/new', (req, res) => {
    res.render('new');
});

// CREATE - Add a new blog to the database
router.post('/', async (req, res) => {
    try {
        await Blog.create(req.body.blog);
        res.redirect('/blogs');
    } catch (err) {
        res.status(500).send(err);
    }
});

// SHOW - Show details of one blog
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.render('show', { blog });
    } catch (err) {
        res.status(500).send(err);
    }
});

// EDIT - Show form to edit a blog
router.get('/:id/edit', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.render('edit', { blog });
    } catch (err) {
        res.status(500).send(err);
    }
});

// UPDATE - Update a particular blog
router.put('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
        res.redirect('/blogs/' + req.params.id);
    } catch (err) {
        res.status(500).send(err);
    }
});

// DELETE - Delete a particular blog
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndRemove(req.params.id);
        res.redirect('/blogs');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
