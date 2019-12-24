const Task = require('../models/tasks');
const db = require('../config/mongoose');

module.exports.add = function(req, res) {
    Task.create({
        item: req.body.item,
        dateOfCreation: req.body.dateOfCreation
    }, function(err, newTask){
        if(err){
            console.log('Error in creating a task');
            return;
        } else{
            console.log('New Task has been created: ', newTask);
            return res.redirect('back');
        }
    })
}