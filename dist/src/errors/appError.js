"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.AppError = void 0;
// export class AppError extends Error {
var AppError = /** @class */ (function () {
    function AppError(statusCode, message) {
        // super();
        this.statusCode = statusCode;
        this.message = message;
    }
    return AppError;
}());
exports.AppError = AppError;
var handleError = function (err, res) {
    var statusCode = err.statusCode, message = err.message;
    return res.status(statusCode).json({
        status: "error",
        statusCode: statusCode,
        message: message,
    });
};
exports.handleError = handleError;
