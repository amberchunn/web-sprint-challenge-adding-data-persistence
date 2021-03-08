
exports.up = function(knex) {
    return knex.schema
    .createTable('tasks', table => {
        table.increments();
        table.integer('projectID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
        table.string('description').notNullable();
        table.string('notes').nullable();
        table.boolean('is_completed').notNullable().defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
};
