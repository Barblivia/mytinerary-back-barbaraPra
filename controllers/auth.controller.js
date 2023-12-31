import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js';
import { verify } from '../helpers/google-verify.js';

const controller = {
   //Sign up
    signup: async (req, res, next) => {
        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex');
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
            req.body.role=0
            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'User registration succeded!'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'User registration failed'
            })
        }
    },
    //Sign in
    signin: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: true },
                { new: true }
            )

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET_TOKEN,
                { expiresIn: '1d' }
            )

            user.password = null;

            return res.status(200).json({
                success: true,
                message: 'User logged successfully',
                response: {
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        image: user.image
                    },
                
                }
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error authenticating user'
            })
        }
    },
    //Token
    token: async (req, res, next) => {
        const { user } = req
        try {
            return res.status(200).json({
                user: {
                    name: user.name,
                    email: user.email,
                    image: user.image
                },
            })
        } catch (error) {
            next(error)
        }
    },
    //GOOGLE Sign in
    googleSignin: async (req, res, next) => {
        const { token_id } = req.body;

            
        try {
            const { name, email, image} = await verify(token_id);
            console.log(email)
   let user = await User.findOne({ email }); 
           
            console.log(user, email)
            if (!user) {
                    const data = {
                    name,
                    email,
                    image,
                    password: bcryptjs.hashSync(process.env.STANDARD_PASS, 10),
                    google: true,
                    verified_code: crypto.randomBytes(10).toString('hex')
                }

                user = await User.create(data)
            }

        
            user.online = true;
            await user.save()

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },

                process.env.SECRET_TOKEN,
                { expiresIn: '1d' }
            ) 

            res.status(200).json({
                success: true,
                message: 'User logged with Google',
                response: { 
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        image: user.image
                    }, 
                }
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error authenticating user', 
                error: error.message
            })
        }
    },
    //Sign out controller
    signout: async (req, res, next) => {
        try {
            const user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: false },
                { new: true }
            )

            return res.status(200).json({
                success: true,
                message: 'User logged out'
            })
        } catch (error) {
            next(error)
        }
    },
    
}

export default controller;