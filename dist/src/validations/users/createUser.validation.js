"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup = __importStar(require("yup"));
var minYear = new Date().getFullYear() - 18;
var minMonth = new Date().getMonth();
var minDay = new Date().getDay();
var createUserSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup
                    .string()
                    .min(3, "Must be at least 3 characters long")
                    .required("Name is required"),
                nickname: yup
                    .string()
                    .min(3, "Must be at least 3 characters long")
                    .required("Nickname is required"),
                birthday: yup
                    .date()
                    .max(new Date(minYear, minMonth, minDay), "You must be over 18 years old")
                    .required("Birthday is required"),
                email: yup.string().email("Invalid email").required("Email is required"),
                password: yup
                    .string()
                    .min(8, "Must be at least 8 characters long")
                    .required("Password is required"),
                isAdm: yup.boolean()
            }),
            validateOptions: {
                abortEarly: false,
            },
        },
    },
};
exports.default = createUserSchema;
