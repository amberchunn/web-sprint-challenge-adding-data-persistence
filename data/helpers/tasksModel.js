const db = require("../config.js");

module.exports = {
  find,
  add,
};

function find() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.projectID')
    .select(
      "t.description as task_description",
      "p.name as project_name",
      "p.description as project_description",
      "t.notes",
      "t.is_completed"
    )
}
function add(task) {
  return db("tasks")
    .insert(task);
  }
