const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categories = require('./categories.route.js')
const product = require('./product.route.js')
const products = require('./products.route.js')
const users = require('./user.route.js')
const orders = require('./orders.route.js')
const admin = require('./admin.route.js')
const commentary = require('./commentary.route.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categories);

router.use('/product', product);

router.use('/products', products)

router.use('/users', users)

router.use('/orders', orders)

router.use('/admin', admin)

router.use('/commentary', commentary)


module.exports = router;
