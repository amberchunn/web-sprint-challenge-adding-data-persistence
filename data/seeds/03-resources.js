
exports.seed = function(knex) {
  return knex('resources').insert([
        {resources_name: 'shampoo', resources_description: 'soapy'},
        {resources_name: 'wallet', resources_description: 'mo money, mo problems'}
    ]);
};
