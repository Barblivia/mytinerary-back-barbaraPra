import User from "../models/User.js"

const controller = {
    getUsers: async(req, res)=>{
        try {
            const users = await User.find();

            return res.status(200).json({
                success: true,
                users
            })

        } catch (error) {
            next(error)
        }       
    },
    createUser: async(req, res)=>{
        try {
            const newUser = await User.create(req.body); 
        
            return res.status(201).json({
                success: true,
                message: 'User created'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error creating the User'
            })
        }    
    },
    deleteUser: ()=>{},
    updateUser: ()=>{},
    getUserById: async(req, res)=>{},
}
export default controller;
