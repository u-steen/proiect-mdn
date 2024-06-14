const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server'); // asigură-te că server.js exportă app

chai.use(chaiHttp);

describe('Card Routes', function() {
    it('should return a random card', function(done) {
        chai.request(app)
            .get('/cards') // Asigură-te că ruta este corectă
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id');
                done();
            });
    });

    it('should return 404 if no cards available', function(done) {
        chai.request(app)
            .get('/cards') // Pentru a testa această situație, poate fi nevoie să golești baza de date de cărți
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('error', 'Nu există cărți disponibile.');
                done();
            });
    });
});
