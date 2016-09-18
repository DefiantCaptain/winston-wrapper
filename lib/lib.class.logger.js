"use strict";
var winston = require('winston');
var lib_namespace_utilities_1 = require("./lib.namespace.utilities");
var uuid = require('uuid');
var Logger = (function () {
    function Logger(logger) {
        var _this = this;
        this.transactionID = uuid.v4();
        this.normalize = function (logObject) {
            if (logObject === null || logObject === undefined) {
                return;
            }
            var cLogObject = lib_namespace_utilities_1.Utilities.cloneObject(logObject);
            cLogObject["transactionID"] = _this.transactionID;
            cLogObject["timestamp"] = Date.now();
            return cLogObject;
        };
        this.logger = logger || winston;
    }
    Logger.prototype.info = function (msg, logObject) {
        this.logger.info(msg, logObject);
    };
    Logger.prototype.debug = function (msg, logObject) {
        this.logger.debug(msg, logObject);
    };
    Logger.prototype.error = function (msg, logObject) {
        this.logger.error(msg, logObject);
    };
    Logger.prototype.warn = function (msg, logObject) {
        this.logger.warn(msg, logObject);
    };
    Logger.prototype.normalizeWith = function (normalizer) {
        this.normalize = normalizer;
        return this;
    };
    return Logger;
}());
exports.Logger = Logger;
