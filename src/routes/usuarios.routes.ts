import express from 'express';
import { check } from 'express-validator';
import { createUser, getUsers, deleteUser } from '../controllers/usuarios.controllers.ts'

const router = express.Router();

router.post('/user',
    [
        check('username', 'Nombre de usuario es requerido').not().isEmpty(),
        check('email', 'Por favor, ingresa un email válido').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 carácteres.').isLength({ min: 6 }),
    ],
    createUser
)
router.get('/users', getUsers)
router.delete('/user', deleteUser)


export default router;
