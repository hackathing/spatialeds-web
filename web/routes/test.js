const app = require('.');
const request = require('supertest');

describe('routes: homepage', () => {
  it('renders OK', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
