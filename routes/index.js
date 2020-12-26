const router = require('express').Router();

router.get('/', require('../controllers').get);
router.get('/hex', require('../controllers/hex').get);

module.exports = router;
