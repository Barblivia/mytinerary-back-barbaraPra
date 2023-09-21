export const error = (error, req, res, next) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: error.message,
        response: null,
    })
}