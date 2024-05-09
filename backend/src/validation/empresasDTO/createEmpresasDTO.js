const Joi = require('joi');

const empresasDTO = Joi.object({

    email: Joi.string()
        .email()
        .required()
        .min(6)
        .max(255)
        .messages({
            'string.base': 'O email deve ser uma string.',
            'string.email': 'O campo de email deve ser um endereço de e-mail válido.',
            'string.min': 'O email deve ter pelo menos 6 caracteres.',
            'string.max': 'O email não pode ter mais de 255 caracteres.',
            'any.required': 'O email é obrigatório.'
        }),

    senha: Joi.string()
        .min(6)
        .max(20)
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)
        .messages({
            'string.base': 'A senha deve ser uma string.',
            'string.min': 'A senha deve ter pelo menos 6 caracteres.',
            'string.max': 'A senha não pode ter mais de 20 caracteres.',
            'any.required': 'A senha é obrigatória.',
            'string.pattern.base': 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um digito numérico e um comprimento entre 8 e 20 caracteres.'
        }),

    cnpj: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.base': 'O email deve ser uma string.',
            'string.email': 'O campo de email deve ser um endereço de e-mail válido.',
            'string.min': 'O email deve ter pelo menos 6 caracteres.',
            'string.max': 'O email não pode ter mais de 255 caracteres.',
            'any.required': 'O email é obrigatório.'
        }),

    nome_fantasia: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'O nome fantasia deve ser uma string.',
            'string.min': 'O nome fantasia deve ter pelo menos 6 caracteres.',
            'string.max': 'O nome fantasia não pode ter mais de 255 caracteres.',
            'any.required': 'O nome fantasia é obrigatório.'
        })

});

module.exports = empresasDTO;