const express = require('express');
const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
	res.send('Register');
});

//Auth
router.get('/authentication', (req, res, next) => {
	res.send('auth');
});

//Profile
router.get('/profile', (req, res, next) => {
	res.send('profile');
});

//Validate
router.get('/validate', (req, res, next) => {
	res.send('validate');
});

module.exports = router;