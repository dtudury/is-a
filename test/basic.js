var assert = require('assert');
var is = require('../index');


var instances = {};
var arr = instances[is.ARRAY] = [];
var args = instances[is.ARGUMENTS] = (function () {return arguments;})();
var bool = instances[is.BOOLEAN] = true;
var date = instances[is.DATE] = new Date;
var fun = instances[is.FUNCTION] = function () {};
var math = instances[is.MATH] = Math;
instances[is.NULL] = null;
var num = instances[is.NUMBER] = 0;
var obj = instances[is.OBJECT] = {};
var regex = instances[is.REGEXP] = /./;
var str = instances[is.STRING] = "";
instances[is.UNDEFINED] = undefined;

/*
for(var type in instances) {
    console.log(type, is(instances[type]).toString());
}
*/

describe('is-a', function () {
    describe('#toString', function () {
        it('should match types to correct strings', function () {
            for (var type in instances) {
                assert.equal(is(instances[type]).toString(), type);
            }
        });
        it('should not match types to incorrect strings', function () {
            for (var type in instances) {
                for (var untype in instances) {
                    if (type !== untype) {
                        assert.notEqual(is(instances[untype]).toString(), type);
                    }
                }
            }
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
});
