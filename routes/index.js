var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var config = require('../config/config');
var transporter = nodemailer.createTransport(config.mailer);
// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sharck - a code sharing platform' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Sharck - a code sharing platform' });
});


/* GET contact page. */
router.route('/contact').get(function(req, res, next) {
  res.render('contact', { title: 'Sharck - a code sharing platform' });
}).post(function(req, res, next) {
  req.checkBody('name', 'Empty name').notEmpty();
  req.checkBody('email', 'Invalid email').isEmail();
  req.checkBody('message', 'Empty message').notEmpty();

  var errors = req.validationErrors();
  
  if (errors) {
    res.render('contact', {
      title: 'Sharck - a code sharing platform',
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      errorMessages: errors
    });
  } else {

    var mailOptions = {
      from: req.body.email,
      to: 'emmanuel.elias.232317@unn.edu.ng',
      subject: 'Message from a visitor 🤗😉 @ Sharck.com',
      text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.render('thanks', { title: 'Sharck - a code sharing platform' });
  }
});

module.exports = router;
