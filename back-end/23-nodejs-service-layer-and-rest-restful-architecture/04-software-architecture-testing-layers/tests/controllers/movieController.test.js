const { expect } = require('chai');
const sinon = require('sinon');
const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('When calling movieController create', () => {
  describe('When payload is not valid', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(MoviesService, 'create').resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('is called with status 400', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
    it('is called with send message "Dados inválidos"', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    })
  });

  describe('When inserted with success', () => {
    const response = {};
    const request = {};
    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(MoviesService, 'create').resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('is called with status 201', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('is called with send message "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });
  });

});
