const express = require('express');
const router = express.Router();
const {getTasks, addTask, deleteTask} = require('../controllers/task');

router.route('/get').get(getTasks);

router.route('/add').post(addTask);

router.route('/:id').delete(deleteTask);
module.exports = router;