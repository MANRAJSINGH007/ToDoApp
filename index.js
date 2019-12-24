const express = require('express');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

const db = require('./config/mongoose');
const Task = require('./models/tasks');

app.get('/', function(req, res) {
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
});

app.get('/removetask/', function(req, res) {
    let id = req.query.id;
    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in removing the task from database');
            return ;
        }
        return res.redirect('back');
    });
})

app.post('/addTask', function(req, res) {
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
})

app.listen(port, function(err) {
    if(err){
        console.log(`Error while running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running at port: ${port}`);
    return;
});