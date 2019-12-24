const express = require('express');
const router = express.Router();

router.use(express.urlencoded());

router.get('/', require('../controller/homeController').home);

router.post('/addTask', require('../controller/addTaskController').add);

router.get('/removetask', require('../controller/removeTaskController').remove);

module.exports = router;