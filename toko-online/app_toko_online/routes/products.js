var express = require ('express');
var router = express.Router();
var ProductController = require("../controllers/products");

router.get("/all", ProductController.index);
router.get("/id", ProductController.index);

module.exports = router;