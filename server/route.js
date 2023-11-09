const express = require("express")
const router = express.Router()
const {createUser,loginUser} = require("./src/Controllers/userController")
const {createCourse,getCourse} = require("./src/Controllers/courseController.js")

router.post("/createuser" , createUser)
router.post("/login" , loginUser)
router.post("/course" , createCourse)
router.get("/getcourse" , getCourse)

module.exports = router