const router = require('express').Router();
const mustBeAuthenticated = require('../middlewares/must-be-authenticated');

router.get('/', require('../controllers').get);
router.get('/hex', mustBeAuthenticated, require('../controllers/hex').get);

module.exports = router;
