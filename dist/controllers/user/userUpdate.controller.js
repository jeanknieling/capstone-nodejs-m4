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
const userUpdade_service_1 = __importDefault(require("../../services/user/userUpdade.service"));
const userUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nickname, password } = req.body;
        const user = yield (0, userUpdade_service_1.default)(id, nickname, password);
        return res.status(200).json(user);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(401).send({
                error: err.name,
                message: err.message,
            });
        }
    }
});
exports.default = userUpdateController;
