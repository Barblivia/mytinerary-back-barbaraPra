import User from "../models/User.js"

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.query.userId)

        if (user.role === 'admin') {
            return next()
        }

        return res.status(401).json({
            success: false,
            message: 'User does not have credentials for this action'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Internal server error isAdmin middleware'
        })
    }
}