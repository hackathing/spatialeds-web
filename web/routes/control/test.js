const app = require('..');
const request = require('supertest');
const controls = require('../../control');

describe('POST /controls', () => {
  it('persists the schema', done => {
    const data = [
      { name: 'who', type: 'switch' },
      { name: 'what', type: 'switch' },
    ];
    request(app)
      .post('/controls')
      .send({ controls: data })
      .expect(201, { status: 'created' })
      .end((err) => {
        if (err) throw err;
        expect(controls.get()).to.deep.equal(data);
        done();
      });
  });

  it('returns an error if unsuccessful', done => {
    const data = 'pretend controls value 14';
    controls.put(data);
    request(app)
      .post('/controls')
      .send({})
      .expect(400, { error: 'controls not supplied' })
      .end((err) => {
        if (err) throw err;
        expect(controls.get()).to.deep.equal(data);
        done();
      });
  });
});


describe('GET /controls', () => {
  it('returns the schema', done => {
    const data = [
      { name: 'who', type: 'switch' },
      { name: 'what', type: 'switch' },
    ];
    controls.put(data);
    request(app)
      .get('/controls')
      .expect(200, { controls: data })
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
