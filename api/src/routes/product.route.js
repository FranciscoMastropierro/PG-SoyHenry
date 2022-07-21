const { Router } = require("express");
const router = Router();
const {getProductDetail, deleteProduct} = require('../controllers/product.controllers')

router.get('/:id', getProductDetail)

router.delete('/:id', deleteProduct)

module.exports = router;