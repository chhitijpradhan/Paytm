const express = require("express")
const router = express.Router();

const userrouter = require("./user.js");

router.use("/user",userrouter);

module.exports = router();