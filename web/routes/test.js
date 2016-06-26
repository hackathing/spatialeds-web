const app = require('.');
const request = require('supertest');

describe('routes: /', () => {
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

describe('routes: /main.js', () => {
  it('renders OK', done => {
    request(app)
      .get('/main.js')
      .expect(200)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
