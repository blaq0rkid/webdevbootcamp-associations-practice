var mongoose = require("mongoose");

// POST - title and comment
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);