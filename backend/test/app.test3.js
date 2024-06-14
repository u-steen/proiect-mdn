// backend/test/cards.test.js
import request from 'supertest';
import express from 'express';
import router from '../routes/card';
import { expect } from 'chai';

const app = express();
app.use('/cards', router);

describe('GET /cards', () => {
  it('should return a random card', (done) => {
    request(app)
      .get('/cards')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');
        done();
      });
  });
});
