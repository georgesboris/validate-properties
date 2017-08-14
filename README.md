# validate-properties

Validates the properties of a passed object using a minimalistic API.

```bash
yarn add validate-properties
```

### Check if all properties are defined

```javascript
import validate from 'validate-properties'

validate({ a: 1 }, ['a', 'b']) // false
```

*A property is defined if it's value is not undefined and if it's not a blank string.*

### Any of the properties are defined

```javascript
validate({ a: 1 }, [['a', 'b']]) // true
```

*Notice that we are defining this validation as an array within the properties array.*

### Custom validation

```javascript
validate({ a: 1, b: 1 }, [({a , b}) => a === b]) // true
```

### Multiple validations

```javascript
validate({ a: 1, b: 2 }, [
  'a',                     // true
  ['a', 'b'],              // true
  ({ a, b }) => a === b    // false
]) // false
```

### Checking failed validations 

Normally, we return a boolean containing the validation result.
But we can also return an array containing all the validations that have failed.
This can be useful for debugging and displaying form errors.

```javascript
validate({ a: 1 }, ['a', 'b'], true) // [{ index: 1, validation: 'b' }]
```
