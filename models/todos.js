const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: String,
  done: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);