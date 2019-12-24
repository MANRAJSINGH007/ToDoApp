const mongoose = require('mongoose');

// creating the schema/model for moongoose
const taskSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Date,
        required: true
    }
});

// Create a collection named Task in the database which models the schema above(taskSchema)
const Task = mongoose.model('Task', taskSchema);

//export the collection
module.exports = Task;
