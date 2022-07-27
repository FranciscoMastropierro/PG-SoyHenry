const { Router } = require('express');
const Router = Router();
const {getUserByEmail, getUserByName, getUsers, updateUsers} = require('../controllers/user.controllers');
const router = require('./products.route');

router.get('/', getUsers)

router.get('/:name', getUserByName)

router.get('/:email', getUserByEmail)

router.put('/edit', updateUsers)

module.exports = router;