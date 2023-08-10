var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    deadline: Date
});

module.exports = mongoose.model('Task', TaskSchema);