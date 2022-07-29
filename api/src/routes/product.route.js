const { Router } = require("express");
const router = Router();
const {getProductDetail, deleteProduct, putProduct} = require('../controllers/product.controllers')

router.get('/:id', getProductDetail)

router.delete('/:id', deleteProduct)

router.put('/update/:id', deleteProduct)

module.exports = router;