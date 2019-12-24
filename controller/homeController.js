const Task = require('../models/tasks');
const db = require('../config/mongoose');
module.exports.home = function(req, res) {
    Task.find({}, function(err, tasks){
        if(err){
            console.log('error in fetching tasks from db');
            return;
        } else{
            res.render('home', {
                title: 'My Tasks',
                tasks: tasks
            });
        }
    });
}