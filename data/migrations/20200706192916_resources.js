exports.up = function(knex) {
    return knex.schema
    .createTable('resources', table => {
        table.increments();
        table.string('name').notNullable().unique();
        table.string('description').nullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resources')
};
