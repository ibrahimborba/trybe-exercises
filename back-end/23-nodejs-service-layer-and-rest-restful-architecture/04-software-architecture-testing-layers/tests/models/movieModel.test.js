const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Insert a new movie in the DB', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('When inserted with success', () => {
    it('returns an object', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object')
    });
  
    it('object has the id of the created movie', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.a.property('id')
    });
  });
});