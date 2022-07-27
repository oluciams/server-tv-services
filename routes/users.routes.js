import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/users.controller.js'

export const usersRoutes = Router();

usersRoutes.get('/users', getUsers);
usersRoutes.post('/users', createUser);
usersRoutes.put('/users/:id', updateUser);
usersRoutes.delete('/users/:id', deleteUser);
usersRoutes.get('/users/:id');