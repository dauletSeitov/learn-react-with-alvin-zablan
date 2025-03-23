const express = require('express');
const router = express.Router();

let messages = []; // Array to store messages

// READ all messages
router.get('/', (req, res) => {
    res.json(messages);
});

// READ a single message
router.get('/:id', (req, res) => {
    const messageId = req.params.id;
    const message = messages.find(m => m.id === messageId);
    if (message) {
        res.json(message);
    } else {
        res.status(404).send({ error: "Message not found" });
    }
});

// CREATE a new message
router.post('/', (req, res) => {
    let newMessage = req.body;
    messages.push(newMessage);
    res.json(messages);
});

// UPDATE a message
router.put('/:id', (req, res) => {
    const messageId = req.params.id;
    const messageIndex = messages.findIndex(m => m.id === messageId);
    if (messageIndex > -1) {
        const updatedMessage = { ...messages[messageIndex], ...req.body };
        messages[messageIndex] = updatedMessage;
        res.send(updatedMessage);
    } else {
        res.status(404).send({ error: "Message not found" });
    }
});

// DELETE a message
router.delete('/:id', (req, res) => {
    const messageId = req.params.id;
    const remainingMessages = messages.filter(m => m.id !== messageId);
    messages = remainingMessages;
    res.json(messages);
});

module.exports = router;