const Task = require('../models/tasks');
const db = require('../config/mongoose');
module.exports.remove = function(req, res) {
    let id = req.query.id;
    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in removing the task from database');
            return ;
        }
        return res.redirect('back');
    });
}