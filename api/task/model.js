// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db('tasks')
}

function findById(task_id) {
  return db('tasks')
    .where({ task_id }).first()
}

function add(task) {
  return db("tasks")
    .insert(task, 'task_id')
    .then(([task_id]) => findById(task_id));
}

module.exports = {
  find,
  add,
  findById,
};
