import Joi from 'joi';

export const userSignUp = Joi.object({
     role: Joi.string(),
     country: Joi.string(),
     image: Joi.string(),
     online: Joi.boolean(),
     google:Joi.boolean(),
     verified: Joi.boolean(),
     verified_code: Joi.string(),
     email: Joi.string()
         .required()
         .email({
             minDomainSegments: 2
         })
         .messages({
            'any.required': 'The email is required',
            'string.empty': 'The email is required',
            'string.email': 'The mail is invalid'
         }),
     password: Joi.string()
         .required()
         .min(8)
         .max(20)
         .messages({
            'any.required': 'The password is required',
            'string.empty': 'The password is required',
            'string.min': 'The password is too short',
            'string.max': 'The password is too large'
         }),
     name: Joi.string()
         .required()
         .min(2)
         .max(40)
         .messages({
            'any.required': 'The name is required', //no data
            'string.empty': 'The name is required', //name empty
            'string.min': 'The name is too short',
            'string.max': 'The name is too large'
         }),
             
})

export const userSignIn = Joi.object({
    email: Joi.string()
         .required()
         .email({
             minDomainSegments: 2
         })
         .messages({
            'any.required': 'The email is required',
            'string.empty': 'The email is required',
            'string.email': 'The mail is invalid'
         }),
     password: Joi.string()
         .required()
         .min(8)
         .max(20)
         .messages({
            'any.required': 'The password is required',
            'string.empty': 'The password is required',
            'string.min': 'The password is too short',
            'string.max': 'The password is too large'
         }),
})