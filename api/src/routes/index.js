const { Router } = require('express');
const { requiresAuth } = require('express-openid-connect');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categories = require('./categories.route.js')
const product = require('./product.route.js')
const products = require('./products.route.js')
const users = require('./user.route.js')
const orders = require('./orders.route.js')
const routeAuth = require('./auth0.route.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/login", routeAuth)

router.use('/categories', categories);

router.use('/product', product);

router.use('/products', products)

router.use('/users', users)

router.use('/orders', orders)


module.exports = router;
