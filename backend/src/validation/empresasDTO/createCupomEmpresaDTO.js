const Joi = require('joi');

const cupomEmpresasDTO = Joi.object({

    porcentagemCupom: Joi.string()
        .min(1)
        .max(2)
        .pattern(/^\d+$/)
        .required()
        .empty('')
        .messages({
            'string.base': 'A porcentagem deve ser uma string.',
            'string.min': 'A porcentagem do cupom deve ter pelo menos 1 caracteres.',
            'string.max': 'A porcentagem do cupom não pode ter mais de 2 caracteres.',
            'string.pattern.base': 'A porcentagem deve conter apenas números.',
            'any.required': 'A porcentagemé obrigatório.',
            'any.empty': 'A porcentagem não pode ser vazio.'
        }),

    nomeCupom: Joi.string()
        .min(3)
        .max(20)
        .required()
        .empty('')
        .messages({
            'string.base': 'O nome do cupom deve ser uma string.',
            'string.min': 'O nome do cupom deve ter pelo menos 3 caracteres.',
            'string.max': 'O nome do cupom não pode ter mais de 20 caracteres.',
            'any.required': 'O nome do cupom é obrigatório.',
            'any.empty': 'O nome do cupom não pode ser vazio.'
        })

});

module.exports = cupomEmpresasDTO;