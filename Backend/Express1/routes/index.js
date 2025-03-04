var express = require('express');
var router = express.Router();

// Define your route handlers
router.get('/', function(req, res, next) {
    res.send('Welcome to the Index!');
});

// Export the router
module.exports = router; // This is the key point
