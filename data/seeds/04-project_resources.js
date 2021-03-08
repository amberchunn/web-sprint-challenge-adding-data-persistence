
exports.seed = function(knex) {
  return knex('project_resources').insert([
        {project_id: 1, task_id: 1, resource_id: 1},
        {project_id: 2, task_id: 2, resource_id: 2}
      ]);
};
