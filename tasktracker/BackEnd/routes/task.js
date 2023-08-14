const express = require('express');
const router = express.Router();
const {getTasks, addTask, updateTask, deleteTask} = require('../controllers/task');

router.route('/get').get(getTasks);
router.route('/add').post(addTask);
router.route('/:id').delete(deleteTask);  // Move this above the update route
router.route('/update/:id').put(updateTask);


module.exports = router;