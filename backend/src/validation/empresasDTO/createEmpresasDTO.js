const Joi = require('joi');

const empresasDTO = Joi.object({

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
            'any.empty': 'O email não pode ser vazio.'
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
            'string.pattern.base': 'A senha deve conter pelo menos um caractere especial, uma letra maiúscula, uma letra minúscula, um digito numérico e no minimo 8 caracteres.',
            'any.empty': 'A senha não pode ser vazio.'
        }),

    cnpj: Joi.string()
        .length(14)
        .pattern(/^\d+$/)
        .required()
        .empty('')
        .messages({
            'string.base': 'O cnpj deve ser uma string.',
            'string.length': 'O cnpj deve ter 14 caracteres.',
            'string.pattern.base': 'O cnpj deve conter apenas números.',
            'any.required': 'O cnpj é obrigatório.',
            'any.empty': 'O cnpj não pode ser vazio.'
        }),

    nomeFantasia: Joi.string()
        .min(3)
        .max(30)
        .required()
        .pattern(/^[a-zA-ZÀ-ÿ\s]*$/)
        .empty('')
        .messages({
            'string.base': 'O nome fantasia deve ser uma string.',
            'string.min': 'O nome fantasia deve ter pelo menos 3 caracteres.',
            'string.max': 'O nome fantasia não pode ter mais de 30 caracteres.',
            'any.required': 'O nome fantasia é obrigatório.',
            'any.empty': 'O nome fantasia não pode ser vazio.',
            'string.pattern.base': 'O nome fantasia deve conter apenas letras.'
        })

});

module.exports = empresasDTO;