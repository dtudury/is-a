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

var things = [args, arr, bool, date, fun, math, null, num, obj, regex, str, undefined];
function nameOfThing(thing) {
    return {}.toString.call(thing).match(/\[object (.*)\]/i)[1];;
}


describe('is-a', function () {
    describe('#toString', function () {
        it('should output type of object', function () {
            for(var i = 0; i < things.length; i++) {
                var thing = things[i];
                var name = nameOfThing(thing);
                var isStringOfThing = is(thing).toString();
                assert.equal(isStringOfThing, name);
            }
        });
    });
    describe('#a, #an', function () {
        it('should tell if object is of a type', function () {
            for(var i = 0; i < things.length; i++) {
                var thing = things[i];
                var name = nameOfThing(thing);
                assert(is(thing).a[name](), "is " + name + " a "+ name);
                assert(is(thing).an[name](), "is " + name + " an "+ name);
                assert(is(thing)[name](), "is " + name + " "+ name);
            }
            assert(is(arr).an.Array());
            assert(is(str).a.String());
            assert(is(undefined).Undefined());
            assert(is(arr).a.CoreObject());
            assert(is(null).a.Primitive());
        });
        it('should tell if object is of a different type', function () {
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
        it('should tell if object is not of a type', function () {
            for(var i = 0; i < things.length; i++) {
                var thing = things[i];
                var name = nameOfThing(thing);
                for(var j = 0; j < things.length; j++) {
                    if(i !== j) {
                        var otherThing = things[j];
                        var otherName = nameOfThing(otherThing);
                        assert(is(thing).not.a[otherName](), "is " + name + " not a "+ otherName);
                        assert(is(thing).not.an[otherName](), "is " + name + " not an "+ otherName);
                        assert(is(thing).not[otherName](), "is " + name + " not "+ otherName);
                    }
                }
            }
        });
    });
});
