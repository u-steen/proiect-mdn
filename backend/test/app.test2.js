// backend/test/db.test.js
const { expect } = require('chai');
const connection = require('../config/db');

describe('Database Connection', () => {
  it('should connect to the database', (done) => {
    connection.connect((err) => {
      expect(err).to.be.null;
      done();
    });
  });

  after((done) => {
    connection.end(done);
  });
});
