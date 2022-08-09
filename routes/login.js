var express = require('express');
const { send } = require('process');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    if (req.session.loggedIN) {
        res.redirect("/dash")
    }
    else {
        res.render('login');
    }
});


const cred = {
    username: "abbas",
    password: 123456
}
router.post('/', function (req, res, next) {
    if (req.body.username == cred.username && req.body.password == cred.password) {
        req.session.user = req.body.username;
        req.session.loggedIN = true;
        res.redirect("/dash")
    }
    else {
        res.render('login', { message: 'incorrect password or username' });
    }
});

module.exports = router;
