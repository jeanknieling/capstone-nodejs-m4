"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRoutes = void 0;
var express_1 = require("express");
var addressCreate_controller_1 = __importDefault(require("../controllers/address/addressCreate.controller"));
var addressDelete_controller_1 = __importDefault(require("../controllers/address/addressDelete.controller"));
var addressList_controller_1 = __importDefault(require("../controllers/address/addressList.controller"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var routes = (0, express_1.Router)();
var addressRoutes = function () {
    routes.post("/", authUser_middleware_1.authUser, addressCreate_controller_1.default);
    routes.get("/", authUser_middleware_1.authUser, addressList_controller_1.default);
    // routes.patch("/", addressUpdateController);
    routes.delete("/", addressDelete_controller_1.default);
    return routes;
};
exports.addressRoutes = addressRoutes;
