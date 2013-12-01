var is = require('../index');

var StringOrRegExp = [is.STRING, is.REGEXP];

var thing1 = /mischief/;

console.log(is(thing1).a.String); //false
console.log(is(thing1).not.a.Number); //true
console.log(is(thing1).an.Array); //false
console.log(is(thing1).a.RegExp); //true
console.log(is(thing1).a(StringOrRegExp)); //true
console.log(is(thing1).a.Primitive); //false
console.log(is(thing1).a.CoreObject); //true
console.log(is(thing1).not.a.JsonBasicType); //true
console.log(is(thing1).a.BuiltinType); //true


var thing2 = "mayhem";

console.log(is(thing2).a.String); //true
console.log(is(thing2).not.a.Number); //true
console.log(is(thing2).an.Array); //false
console.log(is(thing2).a.RegExp); //false
console.log(is(thing2).a(StringOrRegExp)); //true
console.log(is(thing2).a.Primitive); //true
console.log(is(thing2).a.CoreObject); //true
console.log(is(thing2).not.a.JsonBasicType); //false
console.log(is(thing2).a.BuiltinType); //true


var myType = is.ARRAY;

console.log(myType.is.a.String); //false
console.log(myType.is.not.a.Number); //true
console.log(myType.is.an.Array); //true
console.log(myType.is.a.RegExp); //false
console.log(myType.is.a(StringOrRegExp)); //false
console.log(myType.is.a.Primitive); //false
console.log(myType.is.a.CoreObject); //true
console.log(myType.is.not.a.JsonBasicType); //false
console.log(myType.is.a.BuiltinType); //true
