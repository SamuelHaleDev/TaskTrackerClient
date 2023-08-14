const Task = require('../model/Task');

exports.getTasks = async (req, res) => {
    try {
        console.log("Inside getTasks");
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

exports.addTask = async (req, res) => {
    console.log("Inside addTask");
    const task = req.body;
    const newTask = new Task(task);
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

exports.updateTask = async (req, res) => {
    console.log("Inside updateTask");
    const id = req.params.id;
    const updatedTaskData = req.body;
    console.log("Here is your updated data" + JSON.stringify(updatedTaskData));
    try {
        // Check if the task exists
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // If the task exists, proceed to update it
        task = await Task.findByIdAndUpdate(id, updatedTaskData, { new: true });
        res.status(200).json(task);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    
    try {
        console.log("Inside deleteTask");
        // Check if the task exists
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // If the task exists, proceed to delete it
        await Task.findByIdAndRemove(id).exec();
        res.send('Successfully deleted!');
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}