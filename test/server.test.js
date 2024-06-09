import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';

chai.use(chaiHttp);

describe('Server Status', () => {
  it('should return status ok', (done) => {
    chai.request(server)
      .get('/status')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('status').equal('ok');
        done();
      });
  });
});
