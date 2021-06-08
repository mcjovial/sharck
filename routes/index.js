var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sharck - a code sharing platform' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Sharck - a code sharing platform' });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Sharck - a code sharing platform' });
});

module.exports = router;
