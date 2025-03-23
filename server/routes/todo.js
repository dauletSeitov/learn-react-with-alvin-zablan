const express = require('express');
const router = express.Router();

let id = 1000
let entity = [
    { id: 1, complete: true, text: 'do deberes' },
    { id: 2, complete: false, text: 'to die' },
];

// READ all entity items
router.get('/', (req, res) => {
    res.json(entity);
});

// READ a single entity item
router.get('/:id', (req, res) => {
    const entityId = Number(req.params.id);
    const entityItem = entity.find(e => e.id === entityId);
    if (entityItem) {
        res.json(entityItem);
    } else {
        res.status(404).send({ error: "Entity item not found" });
    }
});

// CREATE a new entity item
router.post('/', (req, res) => {
    let newEntity = {...req.body, id};
    id++
    entity.push(newEntity);
    res.json(entity);
});

// UPDATE an entity item
router.put('/:id', (req, res) => {
    const entityId = Number(req.params.id);
    const entityIndex = entity.findIndex(e => e.id === entityId);
    if (entityIndex > -1) {
        const updatedEntity = { ...entity[entityIndex], ...req.body };
        entity[entityIndex] = updatedEntity;
        res.send(updatedEntity);
    } else {
        res.status(404).send({ error: "Entity item not found" });
    }
});

// DELETE an entity item
router.delete('/:id', (req, res) => {
    const entityId = Number(req.params.id);
    const remainingEntity = entity.filter(e => e.id !== entityId);
    entity = remainingEntity;
    res.json(entity);
});

module.exports = router;