const db = require('../../data/dbConfig');

module.exports = {
    add,
    get
}

function add(project) {
    return db('projects').insert(project)
      .then(([id]) => {
          return db('projects').where('project_id', id).first()
      })
}

function get() {
    return db('projects')
}