var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource - users');
  res.end();
});

// /* GET users listing. */
// router.get('/users', function (req, res, next) {
//   res.send('asdasads');
// });

module.exports = router;
