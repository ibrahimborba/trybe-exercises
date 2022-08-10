const { expect } = require('chai');
const sinon = require('sinon');
const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insert a new movie in the DB', () => {
  describe('When payload is not valid', () => {
    const payloadMovie = {};

    it('returns a boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });
  
    it('checks if boolean is a false', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });
  });

  describe('When inserted with success', () => {
    before(() => {
      const ID_EXAMPLE = 1;
  
      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    it('returns an object', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('object')
    });
  
    it('object has the id of the created movie', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.have.a.property('id')
    });
  });
});
