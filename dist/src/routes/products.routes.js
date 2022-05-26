"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
var express_1 = require("express");
var express_yup_middleware_1 = require("express-yup-middleware");
var productCreate_controller_1 = __importDefault(require("../controllers/product/productCreate.controller"));
var productDelete_controller_1 = __importDefault(require("../controllers/product/productDelete.controller"));
var productLike_controller_1 = __importDefault(require("../controllers/product/productLike.controller"));
var productList_controller_1 = __importDefault(require("../controllers/product/productList.controller"));
var productListByCategory_controller_1 = __importDefault(require("../controllers/product/productListByCategory.controller"));
var productListByName_controller_1 = __importDefault(require("../controllers/product/productListByName.controller"));
var productUpdate_controller_1 = __importDefault(require("../controllers/product/productUpdate.controller"));
var categoryNotFoundByName_middleware_1 = __importDefault(require("../middlewares/categories/categoryNotFoundByName.middleware"));
var productAlreadyExists_middleware_1 = __importDefault(require("../middlewares/products/productAlreadyExists.middleware"));
var productNotFound_middleware_1 = __importDefault(require("../middlewares/products/productNotFound.middleware"));
var productNotRegistered_middleware_1 = __importDefault(require("../middlewares/products/productNotRegistered.middleware"));
var productWithoutCategory_middleware_1 = __importDefault(require("../middlewares/products/productWithoutCategory.middleware"));
var authUser_middleware_1 = require("../middlewares/user/authUser.middleware");
var createProduct_validation_1 = __importDefault(require("../validations/products/createProduct.validation"));
var deleteProduct_validator_1 = __importDefault(require("../validations/products/deleteProduct.validator"));
var likeProducts_validation_1 = __importDefault(require("../validations/products/likeProducts.validation"));
var listProductByCategory_validation_1 = __importDefault(require("../validations/products/listProductByCategory.validation"));
var listProductByName_validation_1 = __importDefault(require("../validations/products/listProductByName.validation"));
var updateProduct_validator_1 = __importDefault(require("../validations/products/updateProduct.validator"));
var token_validator_1 = __importDefault(require("../validations/token.validator"));
var routes = (0, express_1.Router)();
var productsRoutes = function () {
    routes.use((0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: token_validator_1.default,
        propertiesToValidate: ["headers"],
    }));
    routes.post("/", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: createProduct_validation_1.default }), authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, productAlreadyExists_middleware_1.default, productWithoutCategory_middleware_1.default, productCreate_controller_1.default);
    routes.post("/like/:id", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: likeProducts_validation_1.default }), authUser_middleware_1.authUser, productLike_controller_1.default);
    routes.get("/", authUser_middleware_1.authUser, productList_controller_1.default);
    routes.get("/product", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: listProductByName_validation_1.default }), authUser_middleware_1.authUser, productNotFound_middleware_1.default, productListByName_controller_1.default);
    routes.get("/category", (0, express_yup_middleware_1.expressYupMiddleware)({
        schemaValidator: listProductByCategory_validation_1.default,
    }), authUser_middleware_1.authUser, categoryNotFoundByName_middleware_1.default, productListByCategory_controller_1.default);
    routes.patch("/changes/:id", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: updateProduct_validator_1.default }), authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, categoryNotFoundByName_middleware_1.default, productNotRegistered_middleware_1.default, productUpdate_controller_1.default);
    routes.delete("/:id", (0, express_yup_middleware_1.expressYupMiddleware)({ schemaValidator: deleteProduct_validator_1.default }), authUser_middleware_1.authUser, authUser_middleware_1.verifyisAdmMiddleware, productNotRegistered_middleware_1.default, productDelete_controller_1.default);
    return routes;
};
exports.productsRoutes = productsRoutes;
