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
describe("Testing the category routes", function () {
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
    //Criando um usuário para fazer os testes de categoria
    it("Should be able to create a new category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, productName, categoryData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    productName = "product";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: token })
                            .send(categoryData)];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    expect(response.body.id).toBeDefined();
                    expect(response.body.name).toBeDefined();
                    expect(response.body.discount_value).toBeDefined();
                    expect(response.body.created_at).toBeDefined();
                    expect(response.body.updated_at).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to list all the existing categories in the database", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/category")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body[0].id).toBeDefined();
                    expect(response.body[0].name).toBeDefined();
                    expect(response.body[0].created_at).toBeDefined();
                    expect(response.body[0].updated_at).toBeDefined();
                    expect(response.body[0].discount_value).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to list the existing categories by id from the database", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/category/1")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.id).toBeDefined();
                    expect(response.body.name).toBeDefined();
                    expect(response.body.created_at).toBeDefined();
                    expect(response.body.updated_at).toBeDefined();
                    expect(response.body.discount_value).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update a category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, productName, categoryData, name, discount_value, updatedData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = _a.sent();
                    productName = "product";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: token })
                            .send(categoryData)];
                case 2:
                    _a.sent();
                    name = "milk";
                    discount_value = "5";
                    updatedData = { name: name, discount_value: discount_value };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/category/changes/1")
                            .set({ Authorization: token })
                            .send(updatedData)];
                case 3:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var TrueAdmToken, productName, categoryData, deleteResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    TrueAdmToken = _a.sent();
                    productName = "product";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: TrueAdmToken })
                            .send(categoryData)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/category/changes/1")
                            .set({ Authorization: TrueAdmToken })];
                case 3:
                    deleteResponse = _a.sent();
                    expect(deleteResponse.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
//teste de erros das rotas de categoria
describe("Testing the category routes errors", function () {
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
    var userLoginAdmFalse = function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, nickname, email, birthday, password, isAdm, createUser, loginUser, userLogin, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "name";
                    nickname = "nickname";
                    email = "email@mail.com";
                    birthday = "1990-01-03";
                    password = "12345678";
                    isAdm = false;
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
    it("Shouldn't be able to create a new category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, productName, categoryData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmFalse()];
                case 1:
                    token = _a.sent();
                    productName = "product";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: token })
                            .send(categoryData)];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be able to list all the existing categories in the database", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = (_a.sent()) + "a";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/category")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be able to list the existing categories by id from the database", function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmTrue()];
                case 1:
                    token = (_a.sent()) + "a";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/category/1")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be able to update a category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var falseAdmToken, TrueAdmToken, productName, categoryData, name, discount_value, updatedData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmFalse()];
                case 1:
                    falseAdmToken = _a.sent();
                    return [4 /*yield*/, userLoginAdmTrue()];
                case 2:
                    TrueAdmToken = _a.sent();
                    productName = "product";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: TrueAdmToken })
                            .send(categoryData)];
                case 3:
                    _a.sent();
                    name = "milk";
                    discount_value = "5";
                    updatedData = { name: name, discount_value: discount_value };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/category/changes/1")
                            .set({ Authorization: falseAdmToken })
                            .send(updatedData)];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Shouldn't be able to delete a category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var falseAdmToken, TrueAdmToken, productName, categoryData, deleteResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userLoginAdmFalse()];
                case 1:
                    falseAdmToken = _a.sent();
                    return [4 /*yield*/, userLoginAdmTrue()];
                case 2:
                    TrueAdmToken = _a.sent();
                    productName = "product";
                    categoryData = { name: productName };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/category")
                            .set({ Authorization: TrueAdmToken })
                            .send(categoryData)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/category/changes/1")
                            .set({ Authorization: falseAdmToken })];
                case 4:
                    deleteResponse = _a.sent();
                    expect(deleteResponse.status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
