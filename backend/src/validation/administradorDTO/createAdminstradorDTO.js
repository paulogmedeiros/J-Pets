const Joi = require('joi');

const administradorDTO = Joi.object({

    email: Joi.string()
        .email()
        .required()
        .min(6)
        .max(255)
        .empty('')
        .messages({
            'string.base': 'O email deve ser uma string.',
            'string.email': 'O campo de email deve ser um endereço de e-mail válido.',
            'string.min': 'O email deve ter pelo menos 6 caracteres.',
            'string.max': 'O email não pode ter mais de 255 caracteres.',
            'any.required': 'O email é obrigatório.',
            'any.empty': 'O email fantasia não pode ser vazio.'
        }),

    senha: Joi.string()
        .min(8)
        .max(20)
        .required()
        .empty('')
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$'))
        .messages({
            'string.base': 'A senha deve ser uma string.',
            'string.min': 'A senha deve ter pelo menos 8 caracteres.',
            'string.max': 'A senha não pode ter mais de 20 caracteres.',
            'any.required': 'A senha é obrigatória.',
            'string.pattern.base': 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um digito numérico e no minimo 8 caracteres.',
            'any.empty': 'A senha não pode ser vazio.'
        })
});

module.exports = administradorDTO;