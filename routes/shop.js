const express = require("express")
const path = require('path')
const rootDir = require('../utils/path')
const admindata = require("./admin");

const router = express.Router()

router.get("/", (req, res, next) => {
    const products = admindata.products
    res.render("shop", { prods: products, pageTitle: "Shop", path: "/", hasProducts: products.length > 0 })
});
module.exports = router