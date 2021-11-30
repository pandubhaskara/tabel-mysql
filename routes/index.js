const express = require("express")
const app = express()
const router = express.Router();
const athlete = require("./athlete")

router.use("/athlete", athlete);

module.exports = router;