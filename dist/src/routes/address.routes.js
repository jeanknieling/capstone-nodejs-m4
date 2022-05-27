"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRoutes = void 0;
var express_1 = require("express");
var express_yup_middleware_1 = require("express-yup-middleware");
var addressCreate_controller_1 = __importDefault(require("../controllers/address/addressCreate.controller"));
var addressDelete_controller_1 = __importDefault(require("../controllers/address/addressDelete.controller"));
var addressList_controller_1 = __importDefault(require("../controllers/address/addressList.controller"));
var addressListOne_controller_1 = __importDefault(require("../controllers/address/addressListOne.controller"));
var addressUpdate_controller_1 = __importDefault(require("../controllers/address/addressUpdate.controller"));
var addressUpdateAdm_controller_1 = __importDefault(require("../controllers/address/addressUpdateAdm.controller"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var authUser_middleware_2 = require("../middlewares/user/authUser.middleware");
var createAddress_validator_1 = __importDefault(require("../validations/address/createAddress.validator"));
var deleteAddress_validator_1 = __importDefault(require("../validations/address/deleteAddress.validator"));
var updateAddress_validator_1 = __importDefault(require("../validations/address/updateAddress.validator"));
var token_validator_1 = __importDefault(require("../validations/token.validator"));
var routes = (0, express_1.Router)();
var addressRoutes = function () {
    routes.use((0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }), authUser_middleware_1.authUser);
    routes.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: createAddress_validator_1.default,
    }), addressCreate_controller_1.default);
    routes.get("/", authUser_middleware_2.verifyisAdmMiddleware, addressList_controller_1.default);
    routes.get("/self", addressListOne_controller_1.default);
    routes.patch("/:addressId", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: deleteAddress_validator_1.default,
    }), addressUpdate_controller_1.default);
    routes.patch("/adm/:addressId", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: deleteAddress_validator_1.default,
    }), authUser_middleware_1.authUser, addressUpdateAdm_controller_1.default);
    routes.delete("/", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: updateAddress_validator_1.default,
    }), addressDelete_controller_1.default);
    return routes;
};
exports.addressRoutes = addressRoutes;
