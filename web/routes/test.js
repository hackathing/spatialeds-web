const app = require('.');
const request = require('supertest');

describe('GET /', () => {
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

describe('GET /main.js', () => {
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
