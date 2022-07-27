const { Router } = require('express');
const { requiresAuth } = require('express-openid-connect');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categories = require('./categories.route.js')
const product = require('./product.route.js')
const products = require('./products.route.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categories);

router.use('/product', product);

router.use('/products', products)

router.get('/', (req, res) => {
    console.log('Flag App Auth0', req.oidc.isAuthenticated());
    console.log('Flag app Auth0 USR', req.oidc.user)
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });


router.get("/profile", requiresAuth(),(req, res) => {
    
    let arrUserInfo =  []
    
    const isAuthenticated=  req.oidc.isAuthenticated();
    const user =  req.oidc.user;

    user.isAuthenticated = isAuthenticated

    arrUserInfo.push(user)

    console.log(arrUserInfo)
    res.send(arrUserInfo)

}); 


module.exports = router;
