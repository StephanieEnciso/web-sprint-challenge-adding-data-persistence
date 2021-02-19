const express = require('express');

const Tasks = require('./model');

const router = express.Router();

router.post('', (req, res) => {
    const taskData = req.body;
    Tasks.add(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.get('', (req, res) => {
    Tasks.get()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: err.message})
        })
})


module.exports = router;
