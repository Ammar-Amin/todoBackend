const TodoModel = require('../models/TodoModel.js');

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find()
    res.send(todo)
}

module.exports.saveTodo = async (req, res) => {
    const { text, priority, dueDate } = req.body

    TodoModel
        .create({ text, priority, dueDate })
        .then((data) => {
            // console.log("Successfully Added Todo: " + data)
            res.send(data)
        })
}

module.exports.updateTodo = async (req, res) => {
    const { _id, text, priority, dueDate } = req.body
    TodoModel
        .findByIdAndUpdate(_id, { text, priority, dueDate })
        .then(() => res.send('Updated Successfully!'))
        .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body
    TodoModel
        .findByIdAndDelete(_id)
        .then(() => res.send('Deleted Successfully!'))
        .catch((err) => console.log(err))
}