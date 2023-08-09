const Task = require('../model/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

exports.addTask = async (req, res) => {
    const task = req.body;
    const newTask = new Task(task);
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        await Task.findByIdAndRemove(id).exec();
        res.send('Successfully deleted!');
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}