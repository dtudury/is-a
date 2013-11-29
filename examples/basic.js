var is = require('../index');

//get type safely
console.log(is([]).toString()); //Array
(function() { console.log(is(arguments).toString()); })();  //Arguments
console.log(is(false).toString()); //Boolean
console.log(is(new Date).toString()); //Date
console.log(is(function(){}).toString()); //Function
console.log(is(Math).toString()); //Math
console.log(is(null).toString()); //Null
console.log(is(0).toString()); //Number
console.log(is({}).toString()); //Object
console.log(is(/./).toString()); //RegExp
console.log(is("").toString()); //String
console.log(is().toString()); //Undefined


//test types legibly
console.log(is([]).a.Number()); //false
console.log(is([]).an.Array()); //true
console.log(is(/./).a.Primitive()); //false
console.log(is(/./).a.CoreObject()); //true
console.log(is(/./).a.JsonBasicType()); //false
console.log(is(/./).a.BuiltinType()); //true



