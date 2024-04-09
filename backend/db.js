const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:GuFGmWlOgO9HGBRR@cluster0.dotvo4i.mongodb.net/todo_app");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo,
}