import Joi from "joi"
export const citySchemaCreate = Joi.object({
    city: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().required().uri(),
    description: Joi.string(),
    })