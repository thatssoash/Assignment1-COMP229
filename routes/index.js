/*  File Name: Assignment 1
    Name: Asheka Hall
    Student Id: 301064568 
    Date: October 6, 2020 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});

});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});

});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});

});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});

});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});

});

/* GET Contact Us Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', message: 'Contact Me!'});

});

module.exports = router;
