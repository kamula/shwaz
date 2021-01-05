const express = require("express");
const path = require('path')
const router = express.Router();

let product = []
const rootDir = require('../utils/path')
router.get("/add-product", (req, res, next) => {
    console.log(req.body)
    res.render('add_product', { pageTitle: "Add product" })

});
router.post("/add-product", (req, res, next) => {
    product.push({ title: req.body.title })
    console.log(req.body);
    res.redirect("/");
});
exports.routes = router;
exports.products = product;