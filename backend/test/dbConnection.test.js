const chai = require('chai');
const expect = chai.expect;
const db = require('../config/db');

describe('Database Connection', function() {
    it('should connect to the database without errors', function(done) {
        db.connect((err) => {
            expect(err).to.be.null;
            done();
        });
    });
});
