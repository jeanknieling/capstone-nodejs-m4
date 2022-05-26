"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var express_yup_middleware_1 = require("express-yup-middleware");
var userCreate_controller_1 = __importDefault(require("../controllers/user/userCreate.controller"));
var userDeleteSelf_controller_1 = __importDefault(require("../controllers/user/userDeleteSelf.controller"));
var userList_controller_1 = __importDefault(require("../controllers/user/userList.controller"));
var userListOne_controller_1 = __importDefault(require("../controllers/user/userListOne.controller"));
var userLogin_controller_1 = __importDefault(require("../controllers/user/userLogin.controller"));
var userUpdate_controller_1 = __importDefault(require("../controllers/user/userUpdate.controller"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var token_validator_1 = __importDefault(require("../validations/token.validator"));
var createUser_validation_1 = __importDefault(require("../validations/users/createUser.validation"));
var updateUser_validation_1 = __importDefault(require("../validations/users/updateUser.validation"));
var userLogin_validation_1 = __importDefault(require("../validations/users/userLogin.validation"));
var routes = (0, express_1.Router)();
var usersRoutes = function () {
    routes.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createUser_validation_1.default }), userCreate_controller_1.default);
    routes.post("/login", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: userLogin_validation_1.default }), userLogin_controller_1.default);
    routes.use((0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }));
    routes.get("/", authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, userList_controller_1.default);
    routes.get("/me", authUser_middleware_1.authUser, userListOne_controller_1.default);
    routes.delete("/me", authUser_middleware_1.authUser, userDeleteSelf_controller_1.default);
    routes.patch("/me", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: updateUser_validation_1.default }), authUser_middleware_1.authUser, userUpdate_controller_1.default);
    return routes;
};
exports.usersRoutes = usersRoutes;
