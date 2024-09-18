const router = require("express").Router();
const { getAllEtablissements, getEtablissementByName, createEtablissement, deleteEtablissementByName, updateEtablissementByName } = require("../controller/etablissements-controller");

router.get("/all", getAllEtablissements);
router.get("/ByName/:name", getEtablissementByName);
router.post("/createEtablissement", createEtablissement);
router.delete("/deleteEtablissement/:name", deleteEtablissementByName);
router.put("/updateEtablissement/:name", updateEtablissementByName); 

module.exports = router;