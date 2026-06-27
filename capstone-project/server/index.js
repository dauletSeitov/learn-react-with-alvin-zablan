const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers)
  };
  
  app.use(cors(corsOptions));
app.use(bodyParser.json());

// Import routes
const auth = require('./routes/auth');

// Use routes
app.use('/auth', auth);

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));