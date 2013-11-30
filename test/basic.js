var assert = require('assert');
var is = require('../index');


var arr = [];
var args = (function () {
    return arguments;
})();
var bool = true;
var date = new Date;
var fun = function () {
};
var math = Math;
//null
var num = 0;
var obj = {};
var regex = /./;
var str = "";
//undefined;


describe('is-a', function () {
    describe('#toString', function () {
        it('should match types to correct strings', function () {
            assert.equal(is(arr).toString(), "Array");
            assert.equal(is(args).toString(), "Arguments");
            assert.equal(is(bool).toString(), "Boolean");
            assert.equal(is(date).toString(), "Date");
            assert.equal(is(fun).toString(), "Function");
            assert.equal(is(math).toString(), "Math");
            assert.equal(is(null).toString(), "Null");
            assert.equal(is(num).toString(), "Number");
            assert.equal(is(obj).toString(), "Object");
            assert.equal(is(regex).toString(), "RegExp");
            assert.equal(is(str).toString(), "String");
            assert.equal(is(undefined).toString(), "Undefined");
        });
    });
    describe('#a, #an', function () {
        it('should return true for same typed objects', function () {
            assert(is(arr).an.Array());
            assert(is(args).Arguments());
            assert(is(bool).a.Boolean());
            assert(is(date).a.Date());
            assert(is(fun).a.Function());
            assert(is(math).Math());
            assert(is(null).Null());
            assert(is(num).a.Number());
            assert(is(obj).an.Object());
            assert(is(regex).a.RegExp());
            assert(is(str).a.String());
            assert(is(undefined).Undefined());
            assert(is(arr).a.CoreObject());
            assert(is(null).a.Primitive());
        });
        it('should return false for different typed objects', function () {
            assert(!is(undefined).an.Array());
            assert(!is(arr).Arguments());
            assert(!is(args).a.Boolean());
            assert(!is(bool).a.Date());
            assert(!is(date).a.Function());
            assert(!is(math).Null());
            assert(!is(fun).Math());
            assert(!is(null).a.Number());
            assert(!is(arr).an.Object());
            assert(!is(num).a.RegExp());
            assert(!is(obj).a.String());
            assert(!is(num).Undefined());
            assert(!is(date).a.JsonBasicType());
            assert(!is(regex).a.Primitive());
        });
    });
    describe('#not.a, #not.an', function () {
        it('should return true for same typed objects', function () {
            assert(!is(arr).not.a(is.ARRAY));
            assert(!is(args).not.a(is.ARGUMENTS));
            assert(!is(bool).not.a(is.BOOLEAN));
            assert(!is(date).not.a(is.DATE));
            assert(!is(fun).not.a(is.FUNCTION));
            assert(!is(math).not.a(is.MATH));
            assert(!is(null).not.a(is.NULL));
            assert(!is(num).not.a(is.NUMBER));
            assert(!is(obj).not.a(is.OBJECT));
            assert(!is(regex).not.a(is.REGEXP));
            assert(!is(str).not.a(is.STRING));
            assert(!is(undefined).not.a(is.UNDEFINED));
        });
    });
});
