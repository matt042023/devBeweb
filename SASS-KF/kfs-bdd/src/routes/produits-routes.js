const router = require("express").Router();
const { getAllProduits, getProduitByName, createProduit, deleteProduitByName, updateProduitByName } = require("../controller/produits-controllers");

router.get("/all", getAllProduits);
router.get("/ByName/:name", getProduitByName);
router.post("/createProduit", createProduit);
router.delete("/deleteProduit/:name", deleteProduitByName);
router.put("/updateProduit/:name", updateProduitByName); 

module.exports = router;