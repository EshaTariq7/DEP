const mongoose = require('mongoose');

// Define the Blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
