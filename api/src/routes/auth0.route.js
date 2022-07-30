const { Router } = require('express');
const { requiresAuth } = require('express-openid-connect');
const {Users} = require('../db')

const router = Router();

router.get('/', async (req, res) => {
    console.log('Flag App Auth0', req.oidc.isAuthenticated());
    console.log('Flag app Auth0 USR', req.oidc.user);

    const user = req.oidc.user

    //    const admin = user.email === userAdminJSON.email ? true: false ---> Para generar administradores NOTA: Necesitamos un JSON con los email permitidos 
    if(user) { 
        await Users.findOrCreate({
            where:{
                firstname: user.given_name,
                lastname: user.family_name,
                username: user.nickname,
                email: user.email,    
                isAdmin:false
            },
        });
        res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    } else {
        res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    }
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