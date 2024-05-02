const Joi = require('joi');

const empresasDTO = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required(),
    cnpj: Joi.string().min(6).required(),
    nome_fantasia: Joi.string().min(3).max(30).required()
});

module.exports = empresasDTO;