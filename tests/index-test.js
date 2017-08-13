import expect from 'expect';
import validate from 'src/index';

describe('without required props', function () {
  
  it('should return true if no props are required', function () {
    const result = validate({});
    expect(result).toEqual(true);
  });

});

describe('with required props', function () {

  describe('passing prop strings', function () {
    
    it('should return true if all required props are present', function () {
      const result = validate({ prop: true }, ['prop']);
      expect(result).toEqual(true);
    });
    
    it('should return false if any required prop is not present', function () {
      const result = validate({ prop: true }, ['otherProp']);
      expect(result).toEqual(false);
    });

  });
  
  describe('passing prop arrays', function () {
    
    it('should return true if any of the props is present', function () {
      const result = validate({ prop: true }, [['prop', 'anotherProp']]);
      expect(result).toEqual(true);
    });

    it('should return false if none of the props are present', function () {
      const result = validate({ prop: true }, [['otherProp', 'anotherProp']]);
      expect(result).toEqual(false);
    });

  });

  describe('passing prop functions', function () {

    it('should return true if the validation function returns true', function () {
      const result = validate({ prop: true }, [(props) => props.prop === true]);
      expect(result).toEqual(true);
    });

    it('should return false if the validation function returns false', function () {
      const result = validate({ prop: true }, [(props) => props.prop === false]);
      expect(result).toEqual(false);
    });

  });

});

describe('with response as array', function () {
  
  it('should return an empty array if all required props are present', function () {
    const result = validate({ prop: 'prop' }, ['prop'], true);
    expect(result).toBeAn('array');
    expect(result.length).toEqual(0);
  });

  it('should return an array of invalid props if any condition is not met', function () {
    const result = validate({ prop: 'prop' }, ['prop', 'propA', 'propB'], true);
    expect(result).toBeAn('array');
    expect(result.length).toEqual(2);
  });

});
