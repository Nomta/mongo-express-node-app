const router = require("express").Router();

router.get("/", require("../controllers").get);

module.exports = router;
