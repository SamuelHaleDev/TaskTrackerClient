const express = require('express');
const router = express.Router();
const {getTasks, addTask, deleteTask} = require('../controllers/task');

router.route('/').get(getTasks).post(addTask);

router.route('/:id').delete(deleteTask);
module.exports = router;