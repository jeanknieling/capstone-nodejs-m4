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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_entity_1 = require("../../entities/user.entity");
var data_source_1 = require("../../data-source");
var bcrypt_1 = __importDefault(require("bcrypt"));
var appError_1 = require("../../errors/appError");
var checkDate_1 = require("../../utils/checkDate");
var cart_entity_1 = require("../../entities/cart.entity");
var userCreateService = function (_a) {
    var name = _a.name, nickname = _a.nickname, birthday = _a.birthday, email = _a.email, password = _a.password, isAdm = _a.isAdm;
    return __awaiter(void 0, void 0, void 0, function () {
        var validDate, userRepository, cartRepository, users, emailAlreadyExists, cart, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    validDate = (0, checkDate_1.checkDate)(birthday);
                    if (!validDate) {
                        throw new appError_1.AppError(400, "Invalid date - correct format - (yyyy-mm-dd)");
                    }
                    userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                    cartRepository = data_source_1.AppDataSource.getRepository(cart_entity_1.Cart);
                    return [4 /*yield*/, userRepository.find()];
                case 1:
                    users = _b.sent();
                    emailAlreadyExists = users.find(function (user) { return user.email === email; });
                    if (emailAlreadyExists) {
                        throw new appError_1.AppError(409, "Email Already Exists");
                    }
                    cart = new cart_entity_1.Cart();
                    cart.total = 0;
                    cartRepository.create(cart);
                    return [4 /*yield*/, cartRepository.save(cart)];
                case 2:
                    _b.sent();
                    user = userRepository.create({
                        name: bcrypt_1.default.hashSync(name, 10),
                        nickname: nickname,
                        birthday: birthday,
                        email: email,
                        password: bcrypt_1.default.hashSync(password, 10),
                        cart: cart,
                        isAdm: isAdm ? true : false,
                    });
                    return [4 /*yield*/, userRepository.save(user)];
                case 3:
                    _b.sent();
                    return [2 /*return*/, user];
            }
        });
    });
};
exports.default = userCreateService;
