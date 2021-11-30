const express = require('express');
const router = express.Router();
const athlete = require("../controllers/athlete")

router.get('/', athlete.getAllData);
router.post('/save', athlete.postData);
router.post("/update", athlete.updateData)
router.post("/delete", athlete.deleteData)

module.exports = router;