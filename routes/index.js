var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

// router.get('/films', function (req, res, next) {
//   res.render('films');
// });

// router.get('/login', function (req, res, next) {
//   res.render('login');
// });
// router.get('/signup', function (req, res, next) {
//   res.render('register');
// });

// router.get('/create', function (req, res, next) {
//   res.render('create');
// });

// app.use('/verify', function (req, res, next) {
//   console.log("Authenticate and Redirect")
//   res.redirect('/user');
//   next();
// });

// app.get('/user', function (req, res) {
//   res.send("User Page");
// });
module.exports = router;
