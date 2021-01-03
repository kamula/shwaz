const express = require("express")
const path = require('path')
const rootDir = require('../utils/path')
const admindata = require("./admin");

const router = express.Router()

router.get("/", (req, res, next) => {
    console.log(admindata.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});
module.exports = router