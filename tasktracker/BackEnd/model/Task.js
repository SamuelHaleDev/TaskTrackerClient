var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
    id: String,
    title: String,
    description: String,
    date: Date
});

module.exports = mongoose.model('Task', TaskSchema);