
exports.seed = function(knex) {
  return knex('projects').insert([
        {name: 'Wash Dog', description: 'coax dog into bathroom', is_completed: false},
        {name: 'Date Nigh', description: 'Fancy Food', is_completed: false}
    ]);
};
