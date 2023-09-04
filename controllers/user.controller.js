import User from "../models/User.js"

const controller = {
    getUsers: async(req, res)=>{},
    getUserById: async(req, res)=>{},
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
}
export default controller;
