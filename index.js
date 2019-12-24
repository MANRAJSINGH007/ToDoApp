const express = require('express');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

var tasks = [];

app.get('/', function(req, res) {
    return res.render('home', {
        title: "ToDoApp",
        tasks: tasks
    });
});

app.get('/removetask/', function(req, res) {

    console.log(req.query);
    let item = req.query.currItem;
    let taskIndex = tasks.findIndex(task => task.item == item);
    if(taskIndex != -1){
        tasks.splice(taskIndex, 1);
    }
    return res.redirect('back');
})

app.post('/addTask', function(req, res) {
    tasks.push(req.body);
    return res.redirect('back');
})

app.listen(port, function(err) {
    if(err){
        console.log(`Error while running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running at port: ${port}`);
    return;
});