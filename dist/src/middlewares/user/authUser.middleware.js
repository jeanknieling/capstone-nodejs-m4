"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyisAdmMiddleware = exports.authUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authUser = function (req, res, next) {
    var token = req.headers.authorization;
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res
                .status(401)
                .json({ message: "Invalid Token or missing token" });
        }
        req.userId = decoded.id;
        req.userIsAdm = decoded.isAdm;
        next();
    });
};
exports.authUser = authUser;
var verifyisAdmMiddleware = function (req, res, next) {
    var token = req.headers.authorization;
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        req.userId = decoded.id;
        req.userIsAdm = decoded.isAdm;
        if (req.userIsAdm === true) {
            return next();
        }
        return res.status(401).json({ message: "Unauthorized" });
    });
};
exports.verifyisAdmMiddleware = verifyisAdmMiddleware;
