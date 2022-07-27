import { Router } from 'express';
import { createUser, getUsers, updateUser } from '../controllers/users.controller.js'

export const usersRoutes = Router();

usersRoutes.get('/users', getUsers);
usersRoutes.post('/users', createUser);
usersRoutes.put('/users/:id', updateUser);
usersRoutes.delete('/users/:id');
usersRoutes.get('/users/:id');