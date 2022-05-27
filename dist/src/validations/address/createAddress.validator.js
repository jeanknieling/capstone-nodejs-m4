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
var createAddressSchema = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                zipcode: yup
                    .string().min(8, "CEP inválido, digite apenas números").max(8, "CEP inválido, digite apenas números").required("CEP is required"),
                street: yup
                    .string().min(8, "Street must be at least 8 characters long").required("Street is required"),
                number: yup.string().required("Number is required"),
                neighborhood: yup.string().required("Neighborhood is required"),
                complement: yup.string().required("Complement is required"),
            }),
            validateOptions: {
                abortEarly: false,
            },
        },
    },
};
exports.default = createAddressSchema;
