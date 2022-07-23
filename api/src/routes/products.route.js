const { Router } = require("express");
const router = Router();
const {getProducts, postProduct,getPrice, filterByCategories} = require('../controllers/products.controllers')


router.get('/', getProducts)

router.get('/price', getPrice)

router.get('/categories', filterByCategories)

router.post('/', postProduct)

module.exports = router;