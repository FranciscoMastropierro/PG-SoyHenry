const { Router } = require('express');
const router = Router();
const { getOrderById, postOrder } = require('../controllers/orders.controllers.js');


router.get('/:id', getOrderById)

router.post('/', postOrder)

module.exports = router;