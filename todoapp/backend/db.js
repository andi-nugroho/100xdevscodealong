const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prince981620:Hello%4012345@cluster0.twgxb.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}