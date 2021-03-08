
exports.seed = function(knex) {
  return knex('project_resources').insert([
        {projectId: 1, taskId: 1, resourceId: 1},
        {projectId: 2, taskId: 2, resourceId: 2}
      ]);
};
