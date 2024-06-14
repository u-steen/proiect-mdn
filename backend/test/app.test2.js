const request = require('supertest');
const express = require('express');
const router = require('../routes/cardRoutes.js');
const { expect } = require('chai');

const app = express();
app.use('/', router);

describe('GET /', () => {
  it('should return a card ID', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
        done();
      });
  });
});
