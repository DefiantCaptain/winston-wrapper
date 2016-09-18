"use strict";
var Utilities;
(function (Utilities) {
    function cloneObject(/**Object*/ source) {
        if (source === null) {
            return null;
        }
        var target;
        var tmpValue;
        var i = 0;
        var key;
        var checkType = function (value) {
            return value === undefined || value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean";
        };
        if (checkType(source)) {
            return source; //we are cloning a primitive, so no cloning needed;
        }
        if (source.constructor === Array) {
            target = [];
            for (i; i < source.length; i++) {
                tmpValue = source[i];
                if (checkType(tmpValue)) {
                    target.push(tmpValue);
                }
                else {
                    target.push(cloneObject(source[i]));
                }
            }
        }
        else {
            target = {};
            for (key in source) {
                tmpValue = source[key];
                if (checkType(tmpValue)) {
                    target[key] = tmpValue;
                }
                else {
                    target[key] = cloneObject(source[key]); //we won't go to the object nested level...
                }
            }
        }
        return target;
    }
    Utilities.cloneObject = cloneObject;
})(Utilities = exports.Utilities || (exports.Utilities = {}));
