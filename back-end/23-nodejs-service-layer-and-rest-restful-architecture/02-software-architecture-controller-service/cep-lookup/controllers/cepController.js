const cepService = require('../services/cepService');

const { log } = console;

const getAddress = async (req, res) => {
  try {
    const { cep } = req.params;
    const response = await cepService.getAddress(cep);
    if (response.error) return res.status(response.code).json(response.error);
    return res.status(response.code).json(response.address);
  } catch (error) {
    log(error);
    return res.status(500).json(error.message);
  }
};

const createAddress = async (req, res) => {
  try {
    const {
      cep, logradouro, bairro, localidade, uf,
    } = req.body;
    const newAddress = {
      cep, logradouro, bairro, localidade, uf,
    };
    const response = await cepService.createAddress(newAddress);
    if (response.error) return res.status(response.code).json(response.error);
    return res.status(response.code).json(response.address);
  } catch (error) {
    log(error);
    return res.status(500).json(error.message);
  }
};

module.exports = { getAddress, createAddress };
