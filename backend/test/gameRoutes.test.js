const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server'); // asigură-te că server.js exportă app

chai.use(chaiHttp);

describe('Game Routes', function() {
    it('should return player information', function(done) {
        chai.request(app)
            .get('/game/players')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf.at.least(2);
                done();
            });
    });

    it('should start a new game', function(done) {
        chai.request(app)
            .post('/game/startGame')
            .send({ user1_id: 1, user2_id: 2 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('gameId');
                done();
            });
    });

    it('should update mana for a user', function(done) {
        chai.request(app)
            .post('/game/updateMana')
            .send({ userId: 1, mana: 50 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Mana updated');
                done();
            });
    });
});
