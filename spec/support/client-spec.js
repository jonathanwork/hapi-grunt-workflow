const app_dir = '../../app';

var index_js = require(app_dir + '/js/testFile');

describe('calculator', ()=> {
  it('adds two #', ()=> {
    expect(add(1, 1)).toBe(2);
  });
});
