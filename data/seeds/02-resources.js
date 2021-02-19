
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: 'guidedProject1'},
        {resource_name: 'guidedProject2'},
        {resource_name: 'guidedProject3'}
      ]);
};
