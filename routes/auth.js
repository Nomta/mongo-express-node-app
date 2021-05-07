const router = require('express').Router();

// router.get('/login', require('../controllers/login').get);
router.post('/login', require('../controllers/login').post);
router.post('/logout', require('../controllers/logout').post);
router.get('/register/:token', require('../controllers/register').confirm);
router.post('/register', require('../controllers/register').post);

module.exports = router;
