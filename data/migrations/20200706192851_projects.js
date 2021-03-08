exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('description');
        table.boolean('is_completed').notNullable().defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects');
};
