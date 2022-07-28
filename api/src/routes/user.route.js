const { Router } = require('express');
const router = Router();
const {getUserByEmail, getUserByName, getUsers, updateUsers, postUser} = require('../controllers/user.controllers');


router.get('/', getUsers)

router.get('/:name', getUserByName)

router.get('/:email', getUserByEmail)

router.put('/edit', updateUsers)

router.post('/', postUser)

module.exports = router;