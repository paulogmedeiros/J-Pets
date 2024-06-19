const Joi = require('joi');

const donoPetDTO = Joi.object({

    nome: Joi.string()
        .min(5)
        .max(50)
        .required()
        .pattern(/^[a-zA-ZÀ-ÿ\s]*$/)
        .empty('')
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.min': 'O nome deve ter pelo menos 5 caracteres.',
            'string.max': 'O nome não pode ter mais de 50 caracteres.',
            'any.required': 'O nome é obrigatório.',
            'any.empty': 'O nome não pode ser vazio.',
            'string.pattern.base': 'O nome deve conter apenas letras.'
        }),



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

module.exports = donoPetDTO;