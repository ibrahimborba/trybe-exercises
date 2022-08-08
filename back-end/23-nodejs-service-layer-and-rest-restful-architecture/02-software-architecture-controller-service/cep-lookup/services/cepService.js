const cepModel = require('../models/cepModel');
const { isValid } = require('../schemas/cepSchema');

const getAddress = async (cep) => {
  const OK_STATUS = 200;
  const BAD_REQUEST = 400;
  const NOT_FOUND = 404;
  const address = await cepModel.getByCEP(cep);

  switch (true) {
    case !isValid(cep): return {
      error: { code: 'invalidData', message: 'CEP inválido' },
      code: BAD_REQUEST,
    };
    case address.length === 0: return {
      error: { code: 'notFound', message: 'CEP não encontrado' },
      code: NOT_FOUND,
    };
    default: return { code: OK_STATUS, address };
  }
};

module.exports = { getAddress };
