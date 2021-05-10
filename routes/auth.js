const router = require('express').Router();

// router.get('/login', require('../controllers/login').get);
router.post('/login', require('../controllers/login').post);
router.post('/logout', require('../controllers/logout').post);
router.post('/register', require('../controllers/register').post);
router.get('/register/:token', require('../controllers/register').confirm);
router.post('/reset', require('../controllers/reset').post);
// router.get('/reset/:token', require('../controllers/reset').get);
router.post('/reset/:token', require('../controllers/reset').reset);

module.exports = router;
