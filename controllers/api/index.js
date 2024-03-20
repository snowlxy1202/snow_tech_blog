const router = require('express').Router();
const user= require('./user');
const dashboard = require('./dashboard');

router.use('/user', user);
router.use('/dashboard', dashboard);

module.exports = router;