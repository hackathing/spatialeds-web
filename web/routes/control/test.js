const _ = require('lodash');
const app = require('..');
const request = require('supertest');
const controls = require('../../control');

describe('POST /controls', () => {
  it('persists the schema', done => {
    controls.reset({ size: 20 });
    const data = { size: 10 };
    request(app)
      .post('/controls')
      .send({ controls: data })
      .expect(201, { status: 'created' })
      .end((err) => {
        if (err) throw err;
        const values = _.values(controls.getValues());
        expect(values).to.deep.equal([
          { size: 10 }, { size: 20 },
        ]);
        done();
      });
  });

  it('returns an error if unsuccessful', done => {
    const data = { key: 'yellow', value: 4 };
    controls.reset(data);
    request(app)
      .post('/controls')
      .send({})
      .expect(400, { error: 'controls not supplied' })
      .end((err) => {
        if (err) throw err;
        const state = controls.getValues();
        expect(state).to.deep.equal({ default: data });
        done();
      });
  });
});


describe('GET /controls', () => {
  it('returns the current values for the controls', done => {
    const data = { foo: 12, bar: 38 };
    controls.reset(data);
    request(app)
      .get('/controls')
      .expect(200, { controls: { default: data } })
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
