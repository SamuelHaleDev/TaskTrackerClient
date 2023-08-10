const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const tasks = require('./routes/task');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/tasks', tasks);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});