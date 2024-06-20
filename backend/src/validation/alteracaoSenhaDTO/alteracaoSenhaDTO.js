const Joi = require('joi');

const alteracaoSenhaDTO = Joi.object({

    senha: Joi.string()
        .required()
        .empty('')
        .messages({
            'string.base': 'A senha deve ser uma string.',
            'any.required': 'A senha é obrigatória.',
            'any.empty': 'A senha não pode ser vazio.'
        }),

    
    novaSenha: Joi.string()
        .min(8)
        .max(20)
        .required()
        .empty('')
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$'))
        .messages({
            'string.base': 'A nova senha deve ser uma string.',
            'string.min': 'A nova senha deve ter pelo menos 8 caracteres.',
            'string.max': 'A nova senha não pode ter mais de 20 caracteres.',
            'any.required': 'A nova senha é obrigatória.',
            'string.pattern.base': 'A nova senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um digito numérico e no minimo 8 caracteres.',
            'any.empty': 'A nova senha não pode ser vazio.'
        })
});

module.exports = alteracaoSenhaDTO;