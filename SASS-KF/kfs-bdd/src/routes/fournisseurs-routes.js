const router = require("express").Router();
const { getAllFournisseurs, getFournisseurByName, createFournisseur, deleteFournisseurByName, updateFournisseurByName, getProduitByIdFournisseur } = require("../controller/fournisseurs-controllers");

router.get("/all", getAllFournisseurs);
router.get("/ByName/:name", getFournisseurByName);
router.post("/createFournisseur", createFournisseur);
router.delete("/deleteFournisseur/:name", deleteFournisseurByName);
router.put("/updateFournisseur/:name", updateFournisseurByName); 
router.get("/produitByFournisseur/:Id",getProduitByIdFournisseur)

module.exports = router;