var express = require('express');
const { session } = require('passport');
const { send, title } = require('process');
var router = express.Router();


let content = [{ img: "https://cdn.pixabay.com/photo/2017/06/23/11/49/laptop-2434393__340.jpg", title: "content-1" },
{ img: "https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761__340.jpg", title: "content-2" },
{ img: "https://cdn.pixabay.com/photo/2016/11/29/11/52/computer-1869306__340.jpg", title: "content-3" }]

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.loggedIN) {
        res.render("dash", { content })

    }
    else {
        res.redirect("/login")
    }
});



module.exports = router;
