
exports.seed = function(knex) {
      return knex('table_name').insert([
        { task_description: 'node stuff', project_id: 1},
        { task_description: 'react stuff', task_completed: 1, project_id: 2},
        { task_description: 'redux stuff', project_id: 3}
      ]);
};
