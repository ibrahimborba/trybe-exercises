const isValid = (cep) => {
  const MIN_LENGTH = 8;
  const CEP_FORMAT = /^\d{5}-?\d{3}$/;
  const formatCep = `${cep.substring(0, 5)}-${cep.substring(5)}`;

  switch (true) {
    case formatCep.length < MIN_LENGTH: return false;
    case !CEP_FORMAT.test(formatCep): return false;
    default: return true;
  }
};

module.exports = { isValid };
