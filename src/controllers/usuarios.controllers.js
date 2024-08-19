import { validationResult } from 'express-validator';
import UserService from '../services/UserService.js';

export const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await UserService.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error al crear usuario:', error); 
        res.status(500).json({ message: 'Error creando usuario', error: error.message });
    }
};

export const getUsers = async (req, res) => {

    try {
        const users = await UserService.findAll();
        if(users.length === 0 || !users){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se han encontrado usuarios registrados'
            })
        }
        return res.json(users)

    } catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await UserService.delete(req.body);
        return res.status(201).json({
            message: 'Usuario eliminado'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message,
            status: error.status
        });
    }
};
