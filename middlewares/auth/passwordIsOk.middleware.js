import bcryptjs from 'bcryptjs';

export const passwordIsOk = (req, res, next) => {
    const pass_db = req.user.password;
    const pass_form = req.body.password;

    if(bcryptjs.compareSync(pass_form, pass_db)) {
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'Your credentials are wrong'
    })
}