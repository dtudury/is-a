module.exports = exports = is;


function _typeOf(obj) {
    return {}.toString.call(obj);
}


function _nameFrom(typeString) {
    return typeString.match(/\[object (.*)\]/i)[1];
}


var ARGUMENTS = exports.ARGUMENTS = _typeOf((function () {return arguments;})());
var ARRAY = exports.ARRAY = _typeOf([]);
var BOOLEAN = exports.BOOLEAN = _typeOf(true);
var DATE = exports.DATE = _typeOf(new Date);
var FUNCTION = exports.FUNCTION = _typeOf(function () {});
var MATH = exports.MATH = _typeOf(Math);
var NULL = exports.NULL = _typeOf(null);
var NUMBER = exports.NUMBER = _typeOf(0);
var OBJECT = exports.OBJECT = _typeOf({});
var REGEXP = exports.REGEXP = _typeOf(/./);
var STRING = exports.STRING = _typeOf("");
var UNDEFINED = exports.UNDEFINED = _typeOf();


var BUILTIN_TYPE = [ARGUMENTS, ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NULL, NUMBER, OBJECT, REGEXP, STRING, UNDEFINED];
var JSON_BASIC_TYPE = [ARRAY, BOOLEAN, NULL, NUMBER, OBJECT, STRING, UNDEFINED];
var CORE_OBJECT = [ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NUMBER, REGEXP, STRING];
var PRIMITIVE = [BOOLEAN, NULL, NUMBER, STRING, UNDEFINED];


var _types = {
    Arguments: ARGUMENTS, Array: ARRAY, Boolean: BOOLEAN, Date: DATE, Function: FUNCTION, Math: MATH,
    Null: NULL, Number: NUMBER, Object: OBJECT, RegExp: REGEXP, String: STRING, Undefined: UNDEFINED,
    BuiltinType: BUILTIN_TYPE, JsonBasicType: JSON_BASIC_TYPE, CoreObject: CORE_OBJECT, Primitive: PRIMITIVE
};


function is(obj) {


    var _typeString = _typeOf(obj);


    function _a(type) {
        if (_typeOf(type) === ARRAY) return !!~type.indexOf(_typeString);
        return _typeString === type;
    }


    function _notA(type) {
        return !_a(type);
    }


    _a.toString = function () {
        return _nameFrom(_typeString);
    };


    _a.toType = function () {
        return _typeString;
    };


    for (var name in _types) {
        (function (name, type) {
            _a[name] = function() {return _a(type);}; //_a["Array"] = function () {return _a(ARRAY)};
            _notA[name] = function() {return _notA(type);};
        })(name, _types[name]);
    }


    _a.a = _a;
    _a.an = _a;
    _a.not = _notA;
    _a.not.a = _notA;
    _a.not.an = _notA;


    return _a;


}