var express = require('express');
const { session } = require('passport');
const { send, title } = require('process');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send("our company is just a start up")
});



module.exports = router;