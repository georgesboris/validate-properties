# validate-properties

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Validates the properties of a passed object using a minimalistic API.

```javascript
import validate from 'validate-properties'

// checks if the object has both 'a' and 'b' properties.
validate({}, ['a', 'b'])

// checks if the object has at least one of the 'a' or 'b' properties.
validate({}, [['a', 'b']])

// checks if the object 'a' property is equal to it's 'b' property.
validate({}, [({a , b}) => a === b])

// it accepts an array so this can all be sequenced
validate({}, [
  // it must have an 'a' prop
  'a',
  // it must have at least one of the 'b' or 'c' prop
  ['b', 'c'],
  // it's 'd' prop must be equal to the letter 'd'
  ({ d }) => d === 'd'
]);

// it returns a boolean by default,
// but it can also return an array with the validations that did not pass
// this is useful for debugging or for displaying errors on the UI
const errors = validate({}, ['a'], true)

// in the above case the errors array would be equal to:
// [{ index: 0, validation: 'a' }]

```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
