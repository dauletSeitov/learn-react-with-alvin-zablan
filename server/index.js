const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const messagesRouter = require('./routes/messages');
const furnitureRouter = require('./routes/furniture');
const todoRouter = require('./routes/todo');

// Use routes
app.use('/messages', messagesRouter);
app.use('/furniture', furnitureRouter);
app.use('/todo', todoRouter);

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));