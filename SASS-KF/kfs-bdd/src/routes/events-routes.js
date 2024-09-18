const router = require("express").Router();
const { getAllEvenements, getEvenementById, createEvenement, deleteEvenementById, updateEvenementById } = require("../controller/events-controllers");

router.get("/all", getAllEvenements);
router.get("/ById/:Id", getEvenementById);
router.post("/createEvenement", createEvenement);
router.delete("/deleteEvenement/:Id", deleteEvenementById);
router.put("/updateEvenement/:Id", updateEvenementById);

module.exports = router;