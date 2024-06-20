const Joi = require('joi');

const catoesValidacaoDTO = Joi.object({

    numeroCartao: Joi.string()
        .length(16)
        .pattern(/^\d+$/)
        .required()
        .empty('')
        .messages({
            'string.base': 'O numero do cartão deve ser uma string.',
            'string.length': 'O numero do cartão deve ter 16 caracteres.',
            'string.pattern.base': 'O numero do cartão deve conter apenas números.',
            'any.required': 'O numero do cartão é obrigatório.',
            'any.empty': 'O numero do cartão não pode ser vazio.'
        }),

    cvv: Joi.string()
        .length(3)
        .pattern(/^\d+$/)
        .required()
        .empty('')
        .messages({
            'string.base': 'O cvv deve ser uma string.',
            'string.length': 'O cvv deve ter 3 caracteres.',
            'string.pattern.base': 'O cvv deve conter apenas números.',
            'any.required': 'O cvv é obrigatório.',
            'any.empty': 'O cvv não pode ser vazio.'
        }),

    dataVencimento: Joi.string()
        .length(5)
        .pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)
        .required()
        .empty('')
        .messages({
            'string.base': 'A data de vencimento deve ser uma string.',
            'string.length': 'A data de vencimento deve ter 5 caracteres.',
            'string.pattern.base': 'A data de vencimento deve estar no formato MM/YY.',
            'any.required': 'A data de vencimento é obrigatório.',
            'any.empty': 'A data de vencimento não pode ser vazio.'
        }),

    nomeCompleto: Joi.string()
        .min(5)
        .max(30)
        .required()
        .pattern(/^[a-zA-ZÀ-ÿ\s]*$/)
        .empty('')
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.min': 'O nome deve ter pelo menos 5 caracteres.',
            'string.max': 'O nome não pode ter mais de 30 caracteres.',
            'any.required': 'O nome é obrigatório.',
            'any.empty': 'O nome não pode ser vazio.',
            'string.pattern.base': 'O nome deve conter apenas letras.'
        }),


});

module.exports = catoesValidacaoDTO;