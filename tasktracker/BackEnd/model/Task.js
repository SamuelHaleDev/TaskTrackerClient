var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    deadline: Date,
    isComplete: {
        type: Boolean,
        default: false
    },
    isCollapse: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);