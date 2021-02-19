
exports.seed = function(knex) {
      return knex('table_name').insert([
        {project_name: 'Node Repo', project_completed: 0},
        {project_name: 'React Repo'},
        {project_name: 'Redux Repo'}
      ]);
};
