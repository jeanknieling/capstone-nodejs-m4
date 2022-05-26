"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var express_yup_middleware_1 = require("express-yup-middleware");
var categoryCreate_controller_1 = __importDefault(require("../controllers/category/categoryCreate.controller"));
var categoryList_controller_1 = __importDefault(require("../controllers/category/categoryList.controller"));
var categoryListOne_controller_1 = __importDefault(require("../controllers/category/categoryListOne.controller"));
var categoryUpdate_controller_1 = __importDefault(require("../controllers/category/categoryUpdate.controller"));
var categoryDelete_controller_1 = __importDefault(require("../controllers/category/categoryDelete.controller"));
var categoryAlreadyExists_middleware_1 = __importDefault(require("../middlewares/categories/categoryAlreadyExists.middleware"));
var categoryNotFoundByID_middleware_1 = __importDefault(require("../middlewares/categories/categoryNotFoundByID.middleware"));
var categoryNotRegistered_middleware_1 = __importDefault(require("../middlewares/categories/categoryNotRegistered.middleware"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var createCategory_validation_1 = __importDefault(require("../validations/categories/createCategory.validation"));
var token_validator_1 = __importDefault(require("../validations/token.validator"));
var listCategoryById_validator_1 = __importDefault(require("../validations/categories/listCategoryById.validator"));
var deleteCategory_validation_1 = __importDefault(require("../validations/categories/deleteCategory.validation"));
var updateCategory_validation_1 = __importDefault(require("../validations/categories/updateCategory.validation"));
var routes = (0, express_1.Router)();
var categoriesRoutes = function () {
    routes.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createCategory_validation_1.default }), authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, categoryAlreadyExists_middleware_1.default, categoryCreate_controller_1.default);
    routes.get("/", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }), authUser_middleware_1.authUser, categoryNotRegistered_middleware_1.default, categoryList_controller_1.default);
    routes.get("/:id", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }), (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: listCategoryById_validator_1.default }), authUser_middleware_1.authUser, categoryNotFoundByID_middleware_1.default, categoryListOne_controller_1.default);
    routes.patch("/changes/:id", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: updateCategory_validation_1.default }), (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }), authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, categoryNotFoundByID_middleware_1.default, categoryAlreadyExists_middleware_1.default, categoryUpdate_controller_1.default);
    routes.delete("/:id", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: deleteCategory_validation_1.default }), (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }), authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, categoryNotFoundByID_middleware_1.default, categoryDelete_controller_1.default);
    return routes;
};
exports.categoriesRoutes = categoriesRoutes;
