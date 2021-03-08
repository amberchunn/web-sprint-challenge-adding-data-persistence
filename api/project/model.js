// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
  return db('projects');
}

function findById(project_id) {
  return db('projects')
    .where({ project_id }).first()
}

function add(project) {
  return db("projects")
    .insert(project, 'project_id')
    .then(([project_id]) => findById(project_id));
}

module.exports = {
  add,
  find,
  findById,
};
