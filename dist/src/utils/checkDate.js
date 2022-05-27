"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixedFloat = exports.checkDate = void 0;
var checkDate = function (date) {
    var dateString = date.toString();
    var exp = /\d{4}\-\d{2}\-\d{2}/;
    if (!exp.test(dateString)) {
        Error("Invalid date");
        return false;
    }
    return true;
};
exports.checkDate = checkDate;
var fixedFloat = function (value) {
    return Number.parseFloat((value).toFixed(2));
};
exports.fixedFloat = fixedFloat;
