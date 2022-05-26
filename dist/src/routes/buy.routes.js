"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyRoutes = void 0;
var express_1 = require("express");
var buyCreate_controller_1 = __importDefault(require("../controllers/buy/buyCreate.controller"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var routes = (0, express_1.Router)();
var buyRoutes = function () {
    routes.post("/", authUser_middleware_1.authUser, buyCreate_controller_1.default);
    return routes;
};
exports.buyRoutes = buyRoutes;
