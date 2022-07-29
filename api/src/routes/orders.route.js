const { Router } = require('express');
const router = Router();
const { getOrderById, postOrder, updateStateOrder } = require('../controllers/orders.controllers.js');


router.get('/:id', getOrderById)

router.post('/', postOrder)

router.delete('/state/:id', updateStateOrder)

module.exports = router;