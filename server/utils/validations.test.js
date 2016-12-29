const expect = require('expect');

const {isRealString} = require('./validations');

describe('isRealString', () => {
  it('should reject non-string', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('     ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', function() {
    var res = isRealString('   David   ');
    expect(res).toBe(true);
  });
});
