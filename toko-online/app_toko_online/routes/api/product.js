const express = require("express");
const router = express.Router();
const productController = require("./../controllers/product");
const { routes } = require("../../../app");

//create - POST (/api/produk)
router.post("/", productController.create);

//read all - GET (/api/produk)
router.get("/", productController.all); //done
//read one /detail - GET (/api/produk/:id)
router.get("/:id", productController.detailproduk);

//update - PUT (/api/produk/:id)
router.put("/:id", productController.update);

//delete - DELETE (/api/produk/:id)
router.delete("/:id", productController.remove);

module.exports= routes;