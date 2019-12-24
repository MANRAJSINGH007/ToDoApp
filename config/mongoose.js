const mongoose = require('mongoose');
//Connect the ODM to the mongoDB database
mongoose.connect('mongodb://localhost/to_do_app_db');

//Verify the connection to the database
const db = mongoose.connection;

// if there is an error print error on console
db.on('error', console.error.bind(console, 'error connecting to the db'));

// if it is up and running
// once the connection between the ODM and the mongoDB database has been established, invoke the callback function
db.once('open', function(){
    console.log('Successfully connected to the database');
})