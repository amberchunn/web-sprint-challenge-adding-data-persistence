
exports.seed = function(knex) {
  return knex('resources').insert([
        {name: 'shampoo', description: 'soapy'},
        {name: 'wallet', description: 'mo money, mo problems'}
    ]);
};
