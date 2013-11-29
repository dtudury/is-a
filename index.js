module.exports = exports = is;


function _getType(obj) {
    return {}.toString.call(obj).match(/^\[object (.*)\]$/)[1];
}


var ARRAY = exports.ARRAY = _getType([]);
var ARGUMENTS = exports.ARGUMENTS = _getType( (function () {return arguments;})());
var BOOLEAN = exports.BOOLEAN = _getType(true);
var DATE = exports.DATE = _getType(new Date);
var FUNCTION = exports.FUNCTION = _getType(function () {});
var MATH = exports.MATH = _getType(Math);
var NULL = exports.NULL = _getType(null);
var NUMBER = exports.NUMBER = _getType(0);
var OBJECT = exports.OBJECT = _getType({});
var REGEXP = exports.REGEXP = _getType(/./);
var STRING = exports.STRING = _getType("");
var UNDEFINED = exports.UNDEFINED = _getType();


var BUILTIN_TYPE = [ARRAY, ARGUMENTS, BOOLEAN, DATE, FUNCTION, MATH, NULL, NUMBER, OBJECT, REGEXP, STRING, UNDEFINED];
var JSON_BASIC_TYPE = [ARRAY, BOOLEAN, NULL, NUMBER, OBJECT, STRING, UNDEFINED];
var CORE_OBJECT = [ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NUMBER, REGEXP, STRING];
var PRIMITIVE = [BOOLEAN, NULL, NUMBER, STRING, UNDEFINED];


function is(obj) {


    var _typeName = _getType(obj)
    var _match = true;


    function _a(type) {
        if (_getType(type) === ARRAY) return (!!~type.indexOf(_typeName)) === _match;
        return (_typeName === type) === _match;
    }


    function _not() {
        _match = false;
        return _a;
    }


    _a.toString = function () {
        return _typeName;
    };


    _a.Array = function () {return _a(ARRAY)};
    _a.Arguments = function () {return _a(ARGUMENTS)};
    _a.Boolean = function () {return _a(BOOLEAN)};
    _a.Date = function () {return _a(DATE)};
    _a.Function = function () {return _a(FUNCTION)};
    _a.Math = function () {return _a(MATH)};
    _a.Null = function () {return _a(NULL)};
    _a.Number = function () {return _a(NUMBER)};
    _a.Object = function () {return _a(OBJECT)};
    _a.RegExp = function () {return _a(REGEXP)};
    _a.String = function () {return _a(STRING)};
    _a.Undefined = function () {return _a(UNDEFINED)};
    _a.BuiltinType = function () {return _a(BUILTIN_TYPE)};
    _a.JsonBasicType = function () {return _a(JSON_BASIC_TYPE)};
    _a.CoreObject = function () {return _a(CORE_OBJECT)};
    _a.Primitive = function () {return _a(PRIMITIVE)};


    _a.a = _a;
    _a.an = _a;
    _a.not = _not;


    return _a;


}