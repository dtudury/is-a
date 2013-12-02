module.exports = exports = is;


function _makeType(obj) {
    var typeString = {}.toString.call(obj);
    var typeName = typeString.match(/\[object (.*)\]/i)[1];
    var sameAs = function(type) {
        if (is(type).an.Array) return !!~type.indexOf(sameAs);
        return typeString === type.toType();
    };
    var notSameAs = function(type) {
        return !sameAs(type);
    };
    sameAs.toType = function() {
        return typeString;
    }
    sameAs.toString = function() {
        return typeName;
    }
    sameAs.is = sameAs.a = sameAs.an = notSameAs.not = sameAs;
    notSameAs.is = notSameAs.a = notSameAs.an = sameAs.not = notSameAs;
    return sameAs;
}


var ARGUMENTS = exports.ARGUMENTS = _makeType((function () {return arguments;})());
var ARRAY = exports.ARRAY = _makeType([]);
var BOOLEAN = exports.BOOLEAN = _makeType(true);
var DATE = exports.DATE = _makeType(new Date);
var FUNCTION = exports.FUNCTION = _makeType(function () {});
var MATH = exports.MATH = _makeType(Math);
var NULL = exports.NULL = _makeType(null);
var NUMBER = exports.NUMBER = _makeType(0);
var OBJECT = exports.OBJECT = _makeType({});
var REGEXP = exports.REGEXP = _makeType(/./);
var STRING = exports.STRING = _makeType("");
var UNDEFINED = exports.UNDEFINED = _makeType();


var BUILTIN_TYPE = [ARGUMENTS, ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NULL, NUMBER, OBJECT, REGEXP, STRING, UNDEFINED];
var JSON_BASIC_TYPE = [ARRAY, BOOLEAN, NULL, NUMBER, OBJECT, STRING, UNDEFINED];
var CORE_OBJECT = [ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NUMBER, REGEXP, STRING];
var PRIMITIVE = [BOOLEAN, NULL, NUMBER, STRING, UNDEFINED];


var _typeSets = {BuiltinType: BUILTIN_TYPE, JsonBasicType: JSON_BASIC_TYPE, CoreObject: CORE_OBJECT, Primitive: PRIMITIVE};


var _typeMap = {};
for(var i = 0; i < BUILTIN_TYPE.length; i++) {
    var type = BUILTIN_TYPE[i];
    _typeMap[type.toType()] = type;
}
for(var i = 0; i < BUILTIN_TYPE.length; i++) {
    var type = BUILTIN_TYPE[i];
    for(var j = 0; j < BUILTIN_TYPE.length; j++) {
        var otherType = BUILTIN_TYPE[j];
        type[otherType.toString()] = type.is(otherType);
        type.not[otherType.toString()] = type.is.not(otherType);
    }
}
for(var i = 0; i < BUILTIN_TYPE.length; i++) {
    var type = BUILTIN_TYPE[i];
    for(var typeSetName in _typeSets) {
        var typeSet = _typeSets[typeSetName];
        type[typeSetName] = type.is(typeSet);
        type.not[typeSetName] = type.is.not(typeSet);
    }
}
for(var typeSetName in _typeSets) {
    var typeSet = _typeSets[typeSetName];
    var message = typeSet.slice(0, typeSet.length - 1).join(", ") + ", or " + typeSet[typeSet.length - 1];
    typeSet.toString = (function (message) {
        return function() {
            return message;
        }
    })(message);
}


function is(obj) {
    return _typeMap[{}.toString.call(obj)];
}