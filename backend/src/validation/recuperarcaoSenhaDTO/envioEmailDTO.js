const Joi = require('joi');

const envioEmailDTO = Joi.object({

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
});

module.exports = envioEmailDTO;