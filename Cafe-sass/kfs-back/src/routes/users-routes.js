const express = require("express");

const router = express.Router();
const { getUsersAll, getUserByName, createUsers, deleteUser, upDateUser, loginUser } = require("../controllers/users-controller");
const { verifyToken } = require("../middleware/auth")


router.get("/", getUsersAll)

router.get("/by-name/:username", getUserByName);

router.post("/add", createUsers)

router.delete("/name/:username",verifyToken, deleteUser);

router.put("/name/:username", upDateUser);

router.post("/login", loginUser);

module.exports = router;