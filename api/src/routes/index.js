const { Router } = require('express');
const { requiresAuth } = require('express-openid-connect');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categories = require('./categories.route.js')
const product = require('./product.route.js')
const products = require('./products.route.js')
const auth0 = require('./auth0.route.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categories);

router.use('/product', product);

router.use('/products', products)

router.use('/', auth0)


module.exports = router;
