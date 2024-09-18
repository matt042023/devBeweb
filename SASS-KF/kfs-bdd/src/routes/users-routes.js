const router = require("express").Router();
const { getAll, getUserByName, createUser, deleteUserByName, updateUserByName,loginUser } = require("../controller/users-controller");

router.get("/all", getAll);
router.get("/ByName/:name", getUserByName);
router.post("/createUser", createUser);
router.delete("/deleteUser/:name", deleteUserByName);
router.put("/updateUser/:name", updateUserByName);
router.post("/loginUser", loginUser) 


module.exports = router;