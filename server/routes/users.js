const router = require("express").Router();
const { AllUsers, addUser,UserGroupAssign } = require("../controllers/userController");

/* AUTHENTICATION ROUTES */
router.get("", AllUsers);

router.post("/add", addUser);

router.put("/assign", UserGroupAssign);

module.exports = router;
