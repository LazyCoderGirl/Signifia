const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/main', (req, res) => {
    res.render('main');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/event', (req, res) => {
    res.render('event');
});

router.get('/sign-in', (req, res) => {
    res.render('signIn');
});

router.get('/sign-up', (req, res) => {
    res.render('signUp');
});

module.exports = router;
