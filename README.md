# validate-properties

Validates the properties of a passed object using a minimalistic API.

```
yarn add validate-properties
```

## Examples

First we will check if the object **has all the passed properties**.
A property is defined if it's value is not undefined and if it's not a blank string.

```javascript
import validate from 'validate-properties'

validate({ a: 1 }, ['a', 'b']) // false
```

Then we will check if the object has **any of the passed properties**.
Notice that we are defining this validation as an array within the properties array.

```javascript
import validate from 'validate-properties'

validate({ a: 1 }, [['a', 'b']]) // true
```

Now we will pass a **custom validation function**.

```javascript
import validate from 'validate-properties'

validate({ a: 1, b: 1 }, [({a , b}) => a === b]) // true
```

At last, we will check for **multiple validations** by passing all these values together in an array.

```javascript
import validate from 'validate-properties'

validate({ a: 1, b: 2, d: 3 }, [
  'a',
  ['a', 'b'],
  ({ a, b }) => a === b
]) // false
```

Normally, we will only return a boolean containing the validation result.
But we can also return an array containing all the validations that have failed.
This can be useful for debugging and displaying form errors.

```javascript
import validate from 'validate-properties'

validate({ a: 1 }, ['a', 'b'], true) // [{ index: 1, validation: 'b' }]
```
