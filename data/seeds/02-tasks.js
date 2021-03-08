
exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: 'Wash Dog', task_notes: 'treats help', task_completed: false, project_id: 1},
    {task_description: 'Pick up Date', task_notes: 'Do not forget the wine', task_completed: false, project_id: 2}
    ]);
};
