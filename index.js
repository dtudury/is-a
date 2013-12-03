var _typeMap = {};

var is = module.exports = exports = function (obj) {
    if(obj && obj.toType && _typeMap[obj.toType()] === obj) return obj;
    return _typeMap[{}.toString.call(obj)];
};

function _make(obj) {
    var thisType = {}.toString.call(obj);

    var thisIs = _typeMap[thisType] = function (other) {
        return (is(other).an.Array) ? !!~other.indexOf(thisIs) : thisIs === other;
    };
    thisIs.not = function (other) {return !thisIs(other)};

    var thisName = thisType.match(/\[object (.*)\]/i)[1];
    thisIs.toString = function () {return thisName};
    thisIs.toType = function () {return thisType};

    thisIs.is = thisIs.a = thisIs.an = thisIs.not.not = thisIs;
    thisIs.not.is = thisIs.not.a = thisIs.not.an = thisIs.not;

    return thisIs;
}

var ARGUMENTS  = exports.ARGUMENTS = _make((function () {return arguments;})());
var ARRAY      = exports.ARRAY =     _make([]);
var BOOLEAN    = exports.BOOLEAN =   _make(false);
var DATE       = exports.DATE =      _make(new Date);
var FUNCTION   = exports.FUNCTION =  _make(function () {});
var MATH       = exports.MATH =      _make(Math);
var NULL       = exports.NULL =      _make(null);
var NUMBER     = exports.NUMBER =    _make(0);
var OBJECT     = exports.OBJECT =    _make({});
var REGEXP     = exports.REGEXP =    _make(/./);
var STRING     = exports.STRING =    _make("");
var UNDEFINED  = exports.UNDEFINED = _make();

exports.BUILTIN_TYPE    = [ARGUMENTS, ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NULL, NUMBER, OBJECT, REGEXP, STRING, UNDEFINED];
exports.JSON_BASIC_TYPE = [           ARRAY, BOOLEAN,                       NULL, NUMBER, OBJECT,         STRING, UNDEFINED];
exports.CORE_OBJECT     = [           ARRAY, BOOLEAN, DATE, FUNCTION, MATH, NUMBER,               REGEXP, STRING           ];
exports.PRIMITIVE       = [                  BOOLEAN,                       NULL, NUMBER,                 STRING, UNDEFINED];

var _typeSets = {BuiltinType: exports.BUILTIN_TYPE, JsonBasicType: exports.JSON_BASIC_TYPE, CoreObject: exports.CORE_OBJECT, Primitive: exports.PRIMITIVE};

for(var i = 0; i < _typeSets.BuiltinType.length; i++) {
    var a = _typeSets.BuiltinType[i];
    for(var j = 0; j < _typeSets.BuiltinType.length; j++) {
        var b = _typeSets.BuiltinType[j].toString();
        a.not[b] = !(a[b] = i === j);
    }
}

for (var name in _typeSets) {
    (function (name) {
        var typeSet = _typeSets[name];
        typeSet.toString = function() {return typeSet.join(' or ')};
        for(var i = 0; i < _typeSets.BuiltinType.length; i++) {
            var type = _typeSets.BuiltinType[i];
            type[name] = !(type.not[name] = !~typeSet.indexOf(type));
        }
    })(name);
}