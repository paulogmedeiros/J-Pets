const LoginDTO = require('../validation/loginDTO/loginDTO');

class LoginValidation {


    validarLogin(req, res, next) {
        const { error, value } = LoginDTO.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

}

module.exports = new LoginValidation()
