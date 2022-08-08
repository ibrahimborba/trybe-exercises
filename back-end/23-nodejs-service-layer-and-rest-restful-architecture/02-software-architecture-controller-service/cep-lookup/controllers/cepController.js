const cepService = require('../services/cepService');

const getAddress = async (req, res) => {
  const { cep } = req.params;
  const response = await cepService.getAddress(cep);
  if (response.error) return res.status(response.code).json(response.error);
  return res.status(response.code).json(response.address);
};

module.exports = { getAddress };
