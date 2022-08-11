const connection = require('./connection');

const getByCEP = async (cep) => {
  const [address] = await connection.execute('SELECT * FROM ceps WHERE cep = ?;', [cep]);
  return address;
};

const createAddress = (newAddress) => newAddress;

module.exports = { getByCEP, createAddress };
