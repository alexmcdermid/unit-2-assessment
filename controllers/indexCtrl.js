const Todo = require('../models/todos');


module.exports = {
    index,
    createTodo,
    deleteTodo,
  };

async function index(req,res) {
    let toSend = await Todo.find()
    res.render('index', {data:toSend})
  }

async function createTodo(req,res) {
    await Todo.create({
      todo:req.body.todo,
      done:'Not Done'
    })
    res.redirect('/')
  }

async function deleteTodo(req,res) {
  let toDeleteId = req.url.substr(req.url.length - 24);
  await Todo.findByIdAndDelete(toDeleteId)
  res.redirect('/')
  }