const { Router } = require("express");
const router = Router();
const {getProducts, postProduct,getPrice} = require('../controllers/products.controllers')


router.get('/', getProducts)

router.get('/price', getPrice)

router.post('/', postProduct)

module.exports = router;