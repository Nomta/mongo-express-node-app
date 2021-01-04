const router = require('express').Router();

router.get('/', require('../controllers').get);
router.get('/hex', require('../controllers/hex').get);
router.get('/login', require('../controllers/login').get);
router.post('/login', require('../controllers/login').post);
router.post('/logout', require('../controllers/logout').post);
// router.get("/register", require("../controllers/register").get);
// router.post("/register", require("../controllers/register").post);

module.exports = router;
