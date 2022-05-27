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
var data_source_1 = require("../../data-source");
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../../app"));
describe("Testing the user routes response with sucess", function () {
    var connection;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.initialize()
                        .then(function (res) { return (connection = res); })
                        .catch(function (err) {
                        console.error("Error during Data Source initialization", err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.destroy()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    var userLoginAdmTrue = function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, nickname, email, birthday, password, isAdm, createUser, loginUser, userLogin, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "name";
                    nickname = "nickname";
                    email = "email@mail.com";
                    birthday = "1990-01-03";
                    password = "12345678";
                    isAdm = true;
                    createUser = { name: name, nickname: nickname, email: email, birthday: birthday, password: password, isAdm: isAdm };
                    //enviando variável com dados de criação de usuário para a requisição.
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users").send(createUser)];
                case 1:
                    //enviando variável com dados de criação de usuário para a requisição.
                    _a.sent();
                    loginUser = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/users/login")
                            .send(loginUser)];
                case 2:
                    userLogin = _a.sent();
                    token = userLogin.body.token;
                    return [2 /*return*/, token];
            }
        });
    }); };
    var createCategory = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, productName, categoryData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    productName = "carros";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: token })
                            .send(categoryData)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    it("Should be able to create a product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, name, price, category, description, newProduct, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, createCategory()];
                case 2:
                    _a.sent();
                    name = "opala";
                    price = 8001;
                    category = "carros";
                    description = "carro incrivel";
                    newProduct = { name: name, description: description, price: price, category: category };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products")
                            .set({ Authorization: token })
                            .send(newProduct)];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    expect(response.body.id).toBeDefined();
                    expect(response.body.name).toBeDefined();
                    expect(response.body.price).toBeDefined();
                    expect(response.body.category).toBeDefined();
                    expect(response.body.description).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to list all products", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/products")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to list product by name", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, nameToFilter, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    nameToFilter = "opala";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products/product")
                            .set({ Authorization: token })
                            .send({ name: nameToFilter })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to list product by category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, name, price, category, description, newProduct, categoryToFilter, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    name = "opala";
                    price = 8001;
                    category = "carros";
                    description = "carro incrivel";
                    newProduct = { name: name, description: description, price: price, category: category };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products")
                            .set({ Authorization: token })
                            .send(newProduct)];
                case 2:
                    _a.sent();
                    categoryToFilter = "carros";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products/category")
                            .set({ Authorization: token })
                            .send({ category: categoryToFilter })];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update the product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, name, price, category, description, newProduct, productCreated, productId, newName, newPrice, newCategory, newDescription, updatedProduct, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    name = "supra";
                    price = 8001;
                    category = "carros";
                    description = "carro incrivel";
                    newProduct = { name: name, price: price, category: category, description: description };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products")
                            .set({ Authorization: token })
                            .send(newProduct)];
                case 2:
                    productCreated = _a.sent();
                    productId = productCreated.body.id;
                    newName = "celta";
                    newPrice = 1500;
                    newCategory = "carros";
                    newDescription = "céu tá preto";
                    updatedProduct = {
                        name: newName,
                        price: newPrice,
                        category: newCategory,
                        description: newDescription,
                    };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/products/changes/".concat(productId))
                            .set({ Authorization: token })
                            .send(updatedProduct)];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete the product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, name, price, category, description, newProduct, productCreated, productId, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    name = "skyline";
                    price = 51000;
                    category = "carros";
                    description = "carro incrivel";
                    newProduct = { name: name, description: description, price: price, category: category };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products")
                            .set({ Authorization: token })
                            .send(newProduct)];
                case 2:
                    productCreated = _a.sent();
                    productId = productCreated.body.id;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .delete("/products/changes/".concat(productId))
                            .set({ Authorization: token })];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing the user routes response with sucess", function () {
    var connection;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.initialize()
                        .then(function (res) { return (connection = res); })
                        .catch(function (err) {
                        console.error("Error during Data Source initialization", err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.destroy()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    var userLoginAdmTrue = function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, nickname, email, birthday, password, isAdm, createUser, loginUser, userLogin, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "name";
                    nickname = "nickname";
                    email = "email@mail.com";
                    birthday = "1990-01-03";
                    password = "12345678";
                    isAdm = true;
                    createUser = { name: name, nickname: nickname, email: email, birthday: birthday, password: password, isAdm: isAdm };
                    //enviando variável com dados de criação de usuário para a requisição.
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users").send(createUser)];
                case 1:
                    //enviando variável com dados de criação de usuário para a requisição.
                    _a.sent();
                    loginUser = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/users/login")
                            .send(loginUser)];
                case 2:
                    userLogin = _a.sent();
                    token = userLogin.body.token;
                    return [2 /*return*/, token];
            }
        });
    }); };
    var createCategory = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, productName, categoryData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    productName = "carros";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: token })
                            .send(categoryData)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    it("Shouldn't be able to list all products", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default).get("/products")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be able to list filtered by name", function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "random";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).get("/products").send({ name: name })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be able to list the products filtered by category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var category, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    category = "random";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).get("/products").send({ category: category })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be possible to update the product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, name, price, category, description, newProduct, productCreate, productId, newName, newPrice, newCategory, newDescription, updatedProduct, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = (_a.sent()) + "a";
                    return [4 /*yield*/, createCategory()];
                case 2:
                    _a.sent();
                    name = "opala";
                    price = 4000;
                    category = "carros";
                    description = "opalao";
                    newProduct = { name: name, price: price, category: category, description: description };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products")
                            .set({ Authorization: token })
                            .send(newProduct)];
                case 3:
                    productCreate = _a.sent();
                    productId = productCreate.body.id;
                    newName = "celta";
                    newPrice = 1500;
                    newCategory = "carros";
                    newDescription = "just a simple console";
                    updatedProduct = {
                        name: newName,
                        price: newPrice,
                        category: newCategory,
                        description: newDescription,
                    };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/products/changes/".concat(productId))
                            .set({ Authorization: token })
                            .send(updatedProduct)];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be possible to delete the product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, name, price, category, description, newProduct, productCreate, productId, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = (_a.sent()) + "a";
                    name = "opala";
                    price = 8001;
                    category = "carros";
                    description = "carro incrivel";
                    newProduct = { name: name, description: description, price: price, category: category };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/products")
                            .set({ Authorization: token })
                            .send(newProduct)];
                case 2:
                    productCreate = _a.sent();
                    productId = productCreate.body.id;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .delete("/products/changes/".concat(productId))
                            .set({ Authorization: token })];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
