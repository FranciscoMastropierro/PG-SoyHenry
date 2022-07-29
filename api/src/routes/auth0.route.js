const { Router } = require('express');
const { requiresAuth } = require('express-openid-connect');
const { authenthincateUser, infoProfile } = require('../controllers/auth0.controllers');
const {Users} = require('../db')

const router = Router();

router.get('/', authenthincateUser);

router.get("/profile", requiresAuth(), infoProfile);

module.exports = router;