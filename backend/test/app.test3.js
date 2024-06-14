// gameRoutes.test.js
import request from 'supertest';
import express from 'express';
import router from '../routes/gameRoutes';
import { expect } from 'chai';

const app = express();
app.use('/', router);

describe('POST /startGame', () => {
  it('should return a game ID', (done) => {
    request(app)
      .post('/startGame')
      .send({ user1_id: 1, user2_id: 2 })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('gameId');
        done();
      });
  });
});