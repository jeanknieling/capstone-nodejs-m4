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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../entities/user.entity");
const data_source_1 = require("../../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const appError_1 = require("../../errors/appError");
const userCreateService = ({ name, nickname, birthday, email, password, isAdm, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    
    const users = yield userRepository.find();
    const emailAlreadyExists = users.find((user) => user.email === email);
    if (emailAlreadyExists) {
        throw new appError_1.AppError(409, "Email Already Exists");
    }
    const user = new user_entity_1.User();
    user.name = name;
    user.nickname = nickname;
    user.birthday = birthday;
    user.email = email;
    user.password = bcrypt_1.default.hashSync(password, 10);
    user.isAdm = isAdm;
    user.created_at = new Date();
    user.updated_at = new Date();
    userRepository.create(user);
    yield userRepository.save(user);
    return user;
});
exports.default = userCreateService;
