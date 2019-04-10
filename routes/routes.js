const express = require('express');
var path = require('path');
const router = express.Router();
const bodyParser = require("../node_modules/body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

var controller = require('../controllers/controllers.js');

//Create a new item
router.post('/api', controller.creatItem);

//Find all list items
router.get('/api',controller.findAllItem);
router.get('/login.html/api',controller.findAllItem);

//find list item by id
router.get('/api/id/:id',controller.findOneItem);

//find list item by name
router.get('/api/name/:name',controller.findByName);

// define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

// define the My Account page route
router.get('/account', function(req, res) {
    res.send(path.join(__dirname, '../views/account.html'));
});

// define the Recycling Directory page route
router.get('/directory', function(req, res) {
    res.send(path.join(__dirname, '../views/directory.html'));
})

module.exports = router;