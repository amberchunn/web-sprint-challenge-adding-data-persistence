exports.up = function(knex) {
    return knex.schema
        .createTable('project_resources', table => {
            table.integer('projectId')
            .unsigned()
            table.foreign('projectId')
            .references('id')
            .inTable('projects')
            table.integer('taskId')
            .unsigned()
            table.foreign('taskId')
            .references('id')
            .inTable('tasks')
            table.integer('resourceId')
            .unsigned()
            table.foreign('resourceId')
            .references('id')
            .inTable('resources')
            table.primary(['projectId', 'taskId', 'resourceId']);
        })
};
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
  };
