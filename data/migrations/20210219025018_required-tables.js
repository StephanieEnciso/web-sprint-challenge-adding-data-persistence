
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 128).notNullable()
      tbl.integer('project_completed')
  })
  .createTable('resources', tbl => {
      tbl.increments('resource_id')
      tbl.string('resource_name', 128).unique().notNullable()
  })
  .createTable('tasks', tbl => {
      tbl.increments('task_id')
      tbl.string('task_description', 128).notNullable()
      tbl.integer('task_completed')
      tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onDelete('CASCADE')
  })
  .createTable('project_resources', tbl => {
      tbl.increments('project_resource_id')
      tbl.integer('project_id')
          .unsigned()
          .references('project_id')
          .inTable('projects')
          .onDelete('CASCADE')
      tbl.integer('resource_id')
          .unsigned()
          .references('resource_id')
          .inTable('resources')
          .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
