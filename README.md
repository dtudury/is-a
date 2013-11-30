# is-a

  legible type checking "micro library"

  [![Build Status](https://travis-ci.org/dtudury/is-a.png)](https://travis-ci.org/dtudury/is-a)

## Installation

    $ npm install is-a

## Usage

```js
var is = require('is-a');

var StringOrRegExp = [is.STRING, is.REGEXP];

var thing1 = /mischief/;

console.log(is(thing1).a.String()); //false
console.log(is(thing1).not.a.Number()); //true
console.log(is(thing1).an.Array()); //false
console.log(is(thing1).a.RegExp()); //true
console.log(is(thing1).a(StringOrRegExp)); //true
console.log(is(thing1).a.Primitive()); //false
console.log(is(thing1).a.CoreObject()); //true
console.log(is(thing1).not.a.JsonBasicType()); //true
console.log(is(thing1).a.BuiltinType()); //true


var thing2 = "mayhem";

console.log(is(thing2).a.String()); //true
console.log(is(thing2).not.a.Number()); //true
console.log(is(thing2).an.Array()); //false
console.log(is(thing2).a.RegExp()); //false
console.log(is(thing2).a(StringOrRegExp)); //true
console.log(is(thing2).a.Primitive()); //true
console.log(is(thing2).a.CoreObject()); //true
console.log(is(thing2).not.a.JsonBasicType()); //false
console.log(is(thing2).a.BuiltinType()); //true
```

## Tests

this is the complete list of tests. `.a` and `.an` are optional, `is(x).not...` is the same as `!is(x)...`

### Testing: is X a Type
* `is(x).an.Arguments()`
* `is(x).an.Array()`
* `is(x).a.Boolean()`
* `is(x).a.Date()`
* `is(x).a.Function()`
* `is(x).a.Math()`
* `is(x).Null()`
* `is(x).a.Number()`
* `is(x).an.Object()`
* `is(x).a.RegExp()`
* `is(x).a.String()`
* `is(x).Undefined()`

### Testing: is X not a Type
* `is(x).not.an.Arguments()`
* `is(x).not.an.Array()`
* `is(x).not.a.Boolean()`
* `is(x).not.a.Date()`
* `is(x).not.a.Function()`
* `is(x).not.a.Math()`
* `is(x).not.Null()`
* `is(x).not.a.Number()`
* `is(x).not.an.Object()`
* `is(x).not.a.RegExp()`
* `is(x).not.a.String()`
* `is(x).not.Undefined()`

### Testing: is X a GeneralType
general types are

* `BuiltinType`: one of (Arguments, Array, Boolean, Date, Function, Math, Null, Number, Object, RegExp, String, Undefined)
* `JsonBasicType`: one of (Array, Boolean, Null, Number, Object, String, Undefined)
* `CoreObject`: one of (Array, Boolean, Date, Function, Math, Number, RegExp, String)
* `Primitive`: one of (Boolean, Null, Number, String, Undefined)

general types can be tested like simple types

* `is(x).a.BuiltinType()`
* `is(x).a.JsonBasicType()`
* `is(x).a.CoreObject()`
* `is(x).a.Primitive()`
* `is(x).a([is.STRING, is.ARRAY])`

`.not` still works

* `is(x).not.a.BuiltinType()`
* `is(x).not.a.JsonBasicType()`
* `is(x).not.a.CoreObject()`
* `is(x).not.a.Primitive()`
* `is(x).not.a([is.STRING, is.ARRAY])`

## everything else
```js
var is = require('is-a');

var thing1 = /mischief/;

console.log(is(thing1).toString()); // "RegExp"
console.log(is(thing1).toType()); // "[object RegExp]"
```