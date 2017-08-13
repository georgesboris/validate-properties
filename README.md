# validate-properties

Validates the properties of a passed object using a minimalistic API.

```bash
yarn add validate-properties
```

### Check if all properties are defined
First we will check if the object *has all the passed properties*.

```javascript
import validate from 'validate-properties'

validate({ a: 1 }, ['a', 'b']) // false
```

*A property is defined if it's value is not undefined and if it's not a blank string.*

### Any of the properties are defined
Then we will check if the object has *any of the passed properties*.
Notice that we are defining this validation as an array within the properties array.

```javascript
validate({ a: 1 }, [['a', 'b']]) // true
```

### Custom validation
Now we will pass a *custom validation function*.

```javascript
validate({ a: 1, b: 1 }, [({a , b}) => a === b]) // true
```

### Multiple validations
At last, we will check for *multiple validations* by passing all these values together in an array.

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
