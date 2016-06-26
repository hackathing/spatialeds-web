const app = require('..');
const request = require('supertest');
const controlSchema = require('../../control-schema');

describe('POST /control-schema', () => {
  it('persists the schema', done => {
    const schema = [
      { name: 'who', type: 'switch' },
      { name: 'what', type: 'switch' },
    ];
    request(app)
      .post('/control-schema')
      .send({ schema: schema })
      .expect(201, { status: 'created' })
      .end((err) => {
        if (err) throw err;
        expect(controlSchema.get()).to.deep.equal(schema);
        done();
      });
  });

  it('returns an error if unsuccessful', done => {
    const schema = 'pretend schema value 23';
    controlSchema.put(schema);
    request(app)
      .post('/control-schema')
      .send({})
      .expect(400, { error: 'schema not supplied' })
      .end((err) => {
        if (err) throw err;
        expect(controlSchema.get()).to.deep.equal(schema);
        done();
      });
  });
});


describe('GET /control-schema', () => {
  it('returns the schema', done => {
    const schema = [
      { name: 'who', type: 'switch' },
      { name: 'what', type: 'switch' },
    ];
    controlSchema.put(schema);
    request(app)
      .get('/control-schema')
      .expect(200, { schema: schema })
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
