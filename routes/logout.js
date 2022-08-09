var express = require('express');
const { send } = require('process');
var router = express.Router();

router.get("/", (req, res, next) => {
    req.session.destroy();
    res.redirect("/login")
})

module.exports = router;