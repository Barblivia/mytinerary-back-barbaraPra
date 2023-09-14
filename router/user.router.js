import express from 'express';
import userController from '../controllers/user.controller.js';
import { validator } from '../middlewares/validator.js';
import { userSignUp } from '../schema/user.schema.js'

const router = express.Router();

const { getUsers, createUser, updateUser, deleteUser }= userController;

router.get('/', getUsers);

//router.post('/', createUser);
// user by id

router.post('/', validator(userSignUp),createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;