"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
var express_1 = require("express");
var addProduct_controller_1 = __importDefault(require("../controllers/cart/addProduct.controller"));
var delProduct_controller_1 = __importDefault(require("../controllers/cart/delProduct.controller"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var routes = (0, express_1.Router)();
var cartRoutes = function () {
    routes.post("/", authUser_middleware_1.authUser, addProduct_controller_1.default);
    routes.delete("/:productId", authUser_middleware_1.authUser, delProduct_controller_1.default);
    return routes;
};
exports.cartRoutes = cartRoutes;
