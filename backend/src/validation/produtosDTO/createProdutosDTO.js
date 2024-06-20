const Joi = require('joi');

const produtoDTO = Joi.object({

    animal_id: Joi.number()
        .required()
        .empty('')
        .messages({
            'number.base': 'O id do animal deve ser um number.',
            'any.required': 'O id do animal é obrigatório.',
            'any.empty': 'O id do animal não pode ser vazio.'
        }),

    nome: Joi.string()
        .min(3)
        .max(30)
        .required()
        .pattern(/^[a-zA-ZÀ-ÿ\s]*$/)
        .empty('')
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.min': 'O nome deve ter pelo menos 3 caracteres.',
            'string.max': 'O nome não pode ter mais de 30 caracteres.',
            'any.required': 'O nome é obrigatório.',
            'any.empty': 'O nome não pode ser vazio.',
            'string.pattern.base': 'O nome deve conter apenas letras.'
        })

});

module.exports = produtoDTO;