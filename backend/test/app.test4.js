// backend/test/gameRoutes.test.js
const request = require('supertest');
const express = require('express');
const router = require('../routes/gameRoutes');
const { expect } = require('chai');

const app = express();
app.use('/games', router);

describe('GET /games/players', () => {
  it('should return player information', (done) => {
    request(app)
      .get('/games/players')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.be.greaterThan(0);
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('username');
        done();
      });
  });
});
