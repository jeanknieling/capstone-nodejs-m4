"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("../../data-source");
var cart_entity_1 = require("../../entities/cart.entity");
var product_entity_1 = require("../../entities/product.entity");
var user_entity_1 = require("../../entities/user.entity");
var appError_1 = require("../../errors/appError");
var checkDate_1 = require("../../utils/checkDate");
var addProductService = function (userId, productName) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepostory, user, cartRepository, cart, productRepository, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userRepostory = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                return [4 /*yield*/, userRepostory.findOne({
                        where: {
                            id: userId,
                        },
                    })];
            case 1:
                user = _a.sent();
                cartRepository = data_source_1.AppDataSource.getRepository(cart_entity_1.Cart);
                return [4 /*yield*/, cartRepository.findOne({
                        where: {
                            id: user === null || user === void 0 ? void 0 : user.cart.id,
                        },
                    })];
            case 2:
                cart = _a.sent();
                productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
                return [4 /*yield*/, productRepository.findOne({
                        where: {
                            name: productName,
                        },
                    })];
            case 3:
                product = _a.sent();
                if (!product) {
                    throw new appError_1.AppError(400, "Product not found");
                }
                if (!(cart && product)) return [3 /*break*/, 5];
                if (cart.products.filter(function (prod) { return prod.name === product.name; }).length) {
                    throw new appError_1.AppError(400, "Product is already in the cart");
                }
                cart.products = __spreadArray(__spreadArray([], cart.products, true), [product], false);
                cart.total = (0, checkDate_1.fixedFloat)(cart.total + product.price);
                return [4 /*yield*/, cartRepository.save(cart)];
            case 4:
                _a.sent();
                return [2 /*return*/, cart];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = addProductService;
