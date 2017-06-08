var addingNums = require('../../server/index');

describe('Calculator', ()=> {
  describe('adding two numbers', ()=> {
    it('should add two #', ()=> {
      expect(addingNums.add(1, 1)).toBe(2)
    });

    it('node module has to be loaded on to app', ()=> {
      expect(addingNums)
    })
  });
});
