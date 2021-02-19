const db = require('../../data/dbConfig');

module.exports = {
    add,
    get
}

function add(task) {
    return db('tasks').insert(task)
      .then(([id]) => {
          return db('tasks').where('task_id', id).first()
      })
}

function get() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id as task_id', 't.task_description as task_description', 't.task_notes as task_notes', 't.task_completed as task_completed', 'p.project_name as project_name', 'p.project_description as project_description')
}