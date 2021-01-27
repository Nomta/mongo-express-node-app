const router = require('express').Router();

router.get('/', require('../controllers/users').get);
router.get('/:id', require('../controllers/users').params);

module.exports = router;
