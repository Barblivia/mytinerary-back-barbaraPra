import express from 'express';
import cityController from '../controllers/city.controller.js';
import { validator } from "../middlewares/validator.js";
import { citySchemaCreate } from "../schema/city.schema.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";
import passport from "../middlewares/passport.js";

const router = express.Router();

const {getCities, getCityById, createCity, updateCity, deleteCity} = cityController;

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', validator(citySchemaCreate), passport.authenticate('jwt', { session: false }), isAdmin, createCity);

router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin, updateCity)

router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin, deleteCity)

export default router;