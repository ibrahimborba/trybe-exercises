const connection = require('./connection');

const getByCEP = async (cep) => {
  const [address] = await connection.execute('SELECT * FROM ceps WHERE cep = ?;', [cep]);
  return address;
};

module.exports = { getByCEP };
