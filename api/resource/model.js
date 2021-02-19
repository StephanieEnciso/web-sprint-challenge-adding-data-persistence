const db = require('../../data/dbConfig');

module.exports = {
    add,
    get
}

function add(resource) {
    return db('resources').insert(resource)
     .then(([id]) => {
         return db('resources').where('resource_id', id).first()
     })
}

function get() {
    return db('resources')
}