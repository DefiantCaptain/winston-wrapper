"use strict";
var express = require('express');
var lib_1 = require('./../lib');
exports.TransactionLogger = express.Router();
exports.TransactionLogger.use(function (req, res, next) {
    req.logger = new lib_1.Logger();
});
