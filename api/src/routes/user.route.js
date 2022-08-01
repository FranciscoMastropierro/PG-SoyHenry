const { Router } = require('express');
const router = Router();
const { getUsers, postUser, updateUser, deleteUser, getUserById, changeRole } = require('../controllers/user.controllers');
//falta configurar middleware para proteger rutas

router.get('/', getUsers)

router.get('/:id', getUserById)

router.put('/:id', updateUser)

router.put('/role/:id', changeRole)

router.post('/', postUser)

router.delete('/:id', deleteUser) //middleware isAdmin() para esta si o si


module.exports = router;