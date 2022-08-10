const Joi = require('joi');

const isAddressValid = (req, _res, next) => {
  const {
    cep, logradouro, bairro, localidade, uf,
  } = req.body;
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({
    cep, logradouro, bairro, localidade, uf,
  });

  if (error) return next(error);
  return next();
};

module.exports = { isAddressValid };
