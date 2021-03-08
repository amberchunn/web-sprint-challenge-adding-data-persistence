exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments('project_id');
        table.string('project_name').notNullable();
        table.string('project_description');
        table.boolean('project_completed').notNullable().defaultTo(false);
    })
    .createTable('resources', table => {
        table.increments('resource_id');
        table.string('resource_name').notNullable().unique();
        table.string('resource_description').nullable();
    })
    .createTable('tasks', table => {
        table.increments('task_id');
        table.string('task_description').notNullable();
        table.string('task_notes').nullable();
        table.boolean('task_completed').notNullable().defaultTo(false);
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
    })
    .createTable('project_resources', table => {
        table.primary(['project_id', 'task_id', 'resource_id']);
        table.foreign('project_id')
        .references('project_id')
        .inTable('projects')
        table.foreign('task_id')
        .references('task_id')
        .inTable('tasks')
        table.foreign('resource_id')
        .references('resource_id')
        .inTable('resources')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
