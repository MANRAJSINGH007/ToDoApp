const express = require('express');
const port = 8000;
const app = express();
const router = require('./routes/index.js');

app.use('/', router);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

app.listen(port, function(err) {
    if(err){
        console.log(`Error while running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running at port: ${port}`);
    return;
});