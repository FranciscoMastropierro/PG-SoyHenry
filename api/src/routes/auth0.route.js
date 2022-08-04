const { Router } = require('express');
const { auth } = require('express-openid-connect');
const { authenthincateUser, infoProfile } = require('../controllers/auth0.controllers');
const {Users} = require('../db');
const {expressjwt} = require("express-jwt");
const jwksRsa = require("jwks-rsa");



const router = Router();


//Auth0 JWT
const authorizationAccess = expressjwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
  
    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer:`https://dev-81nqhdy2.us.auth0.com/`,
    algorithms: ["RS256"],
    
});


// router.get('/', authorizationAccess);




router.post("/profile", authorizationAccess  ,infoProfile);

module.exports = router;