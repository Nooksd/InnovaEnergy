import express from 'express';
import UserController from '../Controllers/userController.js';
import JWT from '../Middlewares/jsonwebtoken.js';

const userRoutes = express.Router();

userRoutes.post('/login', UserController.Login);
userRoutes.post('/create-user', JWT.validateToken, UserController.createUser);
userRoutes.get('/get-all-users', JWT.validateToken, UserController.getAllUsers);
userRoutes.get('/:userId', JWT.validateToken, UserController.getUserById);
userRoutes.put('/:userId', JWT.validateToken, UserController.updateUser);

export default userRoutes;