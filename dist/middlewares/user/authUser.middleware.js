"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyisAdmMiddleware = exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authUser = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            req.userEmail = decoded.email;
            req.userIsAdm = decoded.isAdm;
            next();
        });
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
exports.authUser = authUser;
const verifyisAdmMiddleware = (req, res, next) => {
    if (req.userIsAdm) {
        return next();
    }
    return res.status(401).json({ message: "Unauthorized" });
};
exports.verifyisAdmMiddleware = verifyisAdmMiddleware;
