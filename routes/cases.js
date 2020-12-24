const router = require("express").Router();

router.get("/", require("../controllers/cases").get);
router.get("/:id", require("../controllers/cases").getById);

module.exports = router;
