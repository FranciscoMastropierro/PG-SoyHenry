const { Router } = require("express");
const router = Router();
const {getProducts, postProduct} = require('../controllers/products.controllers')


router.get('/', getProducts)

router.post('/', postProduct)

module.exports = router;