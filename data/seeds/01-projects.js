
exports.seed = function(knex) {
  return knex('projects').insert([
        {project_name: 'Wash Dog', project_description: 'coax dog into bathroom', project_completed: false},
        {project_name: 'Date Nigh', project_description: 'Fancy Food', project_completed: false}
    ]);
};
