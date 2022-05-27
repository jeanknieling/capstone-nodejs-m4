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
    it("Should be able to create a new user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, nickname, email, birthday, password, isAdm, userData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "name";
                    nickname = "nickname";
                    email = "email@mail.com";
                    birthday = "1990-01-03";
                    password = "12345678";
                    isAdm = true;
                    userData = { name: name, nickname: nickname, email: email, birthday: birthday, password: password, isAdm: isAdm };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users").send(userData)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(201);
                    expect(response.body.id).toBeDefined();
                    expect(response.body.name).toBeDefined();
                    expect(response.body.nickname).toBeDefined();
                    expect(response.body.birthday).toBeDefined();
                    expect(response.body.password).toBeDefined();
                    expect(response.body.isAdm).toBeDefined();
                    expect(response.body.created_at).toBeDefined();
                    expect(response.body.updated_at).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to login an user and return the user token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userdata, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    userdata = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userdata)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.token).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return all users registered in the database", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userdata, login, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    userdata = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userdata)];
                case 1:
                    login = _a.sent();
                    token = login.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/users")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should only list the logged in user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userdata, login, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    userdata = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userdata)];
                case 1:
                    login = _a.sent();
                    token = login.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/users/me")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.id).toBeDefined();
                    expect(response.body.name).toBeDefined();
                    expect(response.body.isAdm).toBeDefined();
                    expect(response.body.nickname).toBeDefined();
                    expect(response.body.birthday).toBeDefined();
                    expect(response.body.password).toBeDefined();
                    expect(response.body.created_at).toBeDefined();
                    expect(response.body.updated_at).toBeDefined();
                    expect(response.body.address).toBeDefined();
                    expect(response.body.buys).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Must update only the logged in user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userdata, login, token, updatedNickname, updatedPassword, newUserData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    userdata = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userdata)];
                case 1:
                    login = _a.sent();
                    token = login.body.token;
                    updatedNickname = "namae";
                    updatedPassword = "87654321";
                    newUserData = { updatedNickname: updatedNickname, updatedPassword: updatedPassword };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/users/me")
                            .set({ Authorization: token })
                            .send(newUserData)];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.id).toBeDefined();
                    expect(response.body.name).toBeDefined();
                    expect(response.body.isAdm).toBeDefined();
                    expect(response.body.nickname).toBeDefined();
                    expect(response.body.birthday).toBeDefined();
                    expect(response.body.password).toBeDefined();
                    expect(response.body.created_at).toBeDefined();
                    expect(response.body.updated_at).toBeDefined();
                    expect(response.body.address).toBeDefined();
                    expect(response.body.buys).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Must delete only the logged in user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userdata, login, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    userdata = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userdata)];
                case 1:
                    login = _a.sent();
                    token = login.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .delete("/users/me")
                            .set({ Authorization: token })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing the user routes response without sucess", function () {
    var connection;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.initialize()
                        .then(function (res) { return (connection = res); })
                        .catch(function (err) {
                        console.error("Error during Data Source initialization");
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
    it("Should be not able to create a new user missing a property", function () { return __awaiter(void 0, void 0, void 0, function () {
        var name, nickname, email, birthday, userData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = "name";
                    nickname = "nickname";
                    email = "email@mail.com";
                    birthday = "1990-01-03";
                    userData = { name: name, nickname: nickname, email: email, birthday: birthday };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users").send(userData)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to login an user missing a property", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, userData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    userData = { email: email };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userData)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to login an user with wrong data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "wrongPassword";
                    userData = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userData)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(403);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to login an user with wrong data", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userData, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "wrongPassword";
                    userData = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users/login").send(userData)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(403);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to list all users without a valid token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nameCreate, nicknameCreate, emailCreate, birthdayCreate, passwordCreate, userData, createUserResponse, _a, email, password, userLoginResponse, token, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    nameCreate = "name";
                    nicknameCreate = "nickname";
                    emailCreate = "email@mail.com";
                    birthdayCreate = "1990-01-03";
                    passwordCreate = "12345678";
                    userData = {
                        name: nameCreate,
                        nickname: nicknameCreate,
                        email: emailCreate,
                        birthday: birthdayCreate,
                        password: passwordCreate,
                    };
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default).post("/users").send(userData)];
                case 1:
                    createUserResponse = _b.sent();
                    _a = createUserResponse.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/users/login")
                            .send({ email: email, password: password })];
                case 2:
                    userLoginResponse = _b.sent();
                    token = userLoginResponse.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/users")
                            .set({ Authorization: token + "0" })];
                case 3:
                    response = _b.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toContain("Invalid Token");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to list all users without a valid token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userLoginResponse, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/users/login")
                            .send({ email: email, password: password })];
                case 1:
                    userLoginResponse = _a.sent();
                    token = userLoginResponse.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/users")
                            .set({ Authorization: token + "invalidToken" || undefined })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toContain("Invalid Token or missing token");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to list a logged in user without a valid token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userLoginResponse, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/users/login/me")
                            .send({ email: email, password: password })];
                case 1:
                    userLoginResponse = _a.sent();
                    token = userLoginResponse.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/users")
                            .set({ Authorization: token + "invalidToken" || undefined })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toContain("Invalid Token or missing token");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to update a logged in user without a valid token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userLoginResponse, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .patch("/users/me")
                            .send({ email: email, password: password })];
                case 1:
                    userLoginResponse = _a.sent();
                    token = userLoginResponse.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .get("/users")
                            .set({ Authorization: token + "invalidToken" || undefined })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toContain("Invalid Token or missing token");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be not able to delete a logged in user without a valid token", function () { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, userLoginResponse, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = "email@mail.com";
                    password = "12345678";
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .post("/users/login/me")
                            .send({ email: email, password: password })];
                case 1:
                    userLoginResponse = _a.sent();
                    token = userLoginResponse.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                            .delete("/users/me")
                            .set({ Authorization: token + "invalidToken" || undefined })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(401);
                    expect(response.body.message).toContain("Invalid Token or missing token");
                    return [2 /*return*/];
            }
        });
    }); });
});
