const express = require('express');

const Resources = require('./model');

const router = express.Router();

router.post('', (req, res) => {
    const resourceData = req.body;
    Resources.add(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.get('', (req, res) => {
    Resources.get()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: err.message})
        })
})

module.exports = router;
