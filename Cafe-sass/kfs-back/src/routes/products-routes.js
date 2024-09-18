const express = require("express");

const router = express.Router();
const { getProductsAll, getProductById, creatProducts, deleteProduct, upDateProduct } = require("../controllers/product-controller");



router.get("/", getProductsAll)

router.get("/by-id/:id", getProductById)

router.post("/add", creatProducts)

router.delete("/id/:id", deleteProduct)

router.put("/id/:id", upDateProduct)

module.exports = router;