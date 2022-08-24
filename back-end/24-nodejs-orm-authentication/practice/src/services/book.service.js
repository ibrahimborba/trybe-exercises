const { Book } = require('../models');

const findAll = async () => {
  return Book.findAll();
};

module.exports = {
  findAll,
};