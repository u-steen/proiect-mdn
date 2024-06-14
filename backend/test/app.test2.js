// cardRoutes.test.js
import request from 'supertest';
import express from 'express';
import router from '../routes/cardRoutes.js';
import { expect } from 'chai';

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