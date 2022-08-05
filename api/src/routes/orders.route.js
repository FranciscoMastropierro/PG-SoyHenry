const { Router } = require('express');
const router = Router();
const { getOrderById, postOrder,getAllOrder } = require('../controllers/orders.controllers.js');


router.get('/:id', getOrderById)

router.get('/', getAllOrder)

router.post('/', postOrder)

module.exports = router;