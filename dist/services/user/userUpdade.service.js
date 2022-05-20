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
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userUpdateService = (id, nickname, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const users = yield userRepository.find();
    const account = users.find((user) => user.id === id);
    if (password) {
        if (bcrypt_1.default.compareSync(password, account.password)) {
            throw new Error("Inform a diferent password");
        }
        const newPassword = bcrypt_1.default.hashSync(password, 10);
        yield userRepository.update(account.id, { password: newPassword });
    }
    if (nickname) {
        const newNickName = nickname;
        yield userRepository.update(account.id, { nickname: newNickName });
    }
    const usersUpdated = yield userRepository.find();
    const accountUpdated = usersUpdated.find((user) => user.id === id);
    return accountUpdated;
});
exports.default = userUpdateService;
