const controls =  require('.');

describe('control.reset', () => {
  it('sets the default value', () => {
    controls.reset({ someValue: 2 });
    expect(controls.getValues()).to.deep.equal({
      default: { someValue: 2 },
    });
  });
});


describe('control.push', () => {
  it('adds a value under the given key', () => {
    controls.reset({ someValue: 0 });
    controls.push('65', { someValue: 8882 });
    expect(controls.getValues()).to.deep.equal({
      default: { someValue: 0 },
      '65': { someValue: 8882 },
    });
  });
});
