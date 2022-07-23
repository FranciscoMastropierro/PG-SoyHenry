const { Router } = require("express");
const router = Router();
const {getProducts, postProduct,getPrice, filterByCategories, getOrderByName} = require('../controllers/products.controllers')


router.get('/', getProducts)

router.get('/price', getPrice)

router.get('/categories', filterByCategories)

router.get('/orderByName', getOrderByName)

router.post('/', postProduct)

module.exports = router;