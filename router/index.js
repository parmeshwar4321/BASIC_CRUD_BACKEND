const express = require("express")
const router = express.Router();
const app = express()

const { getUserData, createUser,updateUser, delelteUser, getUserDataId } = require("../controller/user");

router.get('/user', getUserData)
router.get('/user/:id', getUserDataId)
router.post('/user',createUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', delelteUser)


module.exports = router;

