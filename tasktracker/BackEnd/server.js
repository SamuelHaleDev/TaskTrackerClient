const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const taskRoutes = require('./routes/task');

connectDB();

const tasks = require('./routes/task');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/tasks', tasks);

app.use('/api/tasks', taskRoutes);

const PORT = 3001;

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

app.use('*' , (req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

