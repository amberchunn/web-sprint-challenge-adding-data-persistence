
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'Wash Dog', notes: 'treats help', is_completed: false, projectID: 1},
    {description: 'Pick up Date', notes: 'Do not forget the wine', is_completed: false, projectID: 2}
    ]);
};
