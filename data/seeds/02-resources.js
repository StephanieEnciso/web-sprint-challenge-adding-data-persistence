
exports.seed = function(knex) {
      return knex('table_name').insert([
        {resource_name: 'guidedProject1'},
        {resource_name: 'guidedProject2'},
        {resource_name: 'guidedProject3'}
      ]);
};
