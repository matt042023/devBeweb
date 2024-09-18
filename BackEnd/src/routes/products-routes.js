const express = require("express");
const router = express.Router();
const {getAllProducts, getProductbyId, createProduct,deleteProduct,updateProduct} = require("../controller/products-controller");

router.get("/all-products",getAllProducts);
router.get("/by-id/:id",getProductbyId);
router.post("/create-product", createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update.id" , updateProduct)

module.exports = router;