const db = require("../config.js");

module.exports = {
  add,
  find,
  findResources,
  findTasks,
};

function find() {
  return db('projects');
}

function add(project) {
  return db("projects")
    .insert(project);
  }
  function findResources(id) {
    return db('project_resources as pr')
      .join('resources as r', 'r.id', 'pr.resourceId')
      .join('projects as p', 'p.id', 'pr.projectId')
      .select(
        "p.name as project",
        "r.name as resource",
      )
  }
  function findTasks(id) {
    return db('project_resources as pr')
      .join('tasks as t', 't.id', 'pr.taskId')
      .join('projects as p', 'p.id', 'pr.projectId')
      .select(
        "p.name as project",
        "t.description as task"
      )
  }
