// build your `Resource` model here
const db = require('../../data/dbConfig');

function find() {
  return db('resources');
}

function findById(resource_id) {
  return db('resources')
    .where({ resource_id }).first()
}

function add(resource) {
  return db("resources")
    .insert(resource, 'resource_id')
    .then(([resource_id]) => findById(resource_id));
}


module.exports = {
  find,
  add,
  findById,
}
