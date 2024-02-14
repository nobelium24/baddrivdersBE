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
exports.infoValidatorSchema = void 0;
const yup = __importStar(require("yup"));
exports.infoValidatorSchema = yup.object().shape({
    driverName: yup
        .string()
        .min(2, 'First name is too Short!')
        .max(50, 'First name is too Long!')
        .required('First name is required')
        .matches(/^[a-zA-Z0-9]+$/, "Driver name must contain only alphabets and numbers allowed"),
    carModel: yup
        .string()
        .min(2, 'Car model is too Short!')
        .max(50, 'Car model is too Long!')
        .required('Car model is required')
        .matches(/^[a-zA-Z0-9 -]+$/, "Car model must contain only alphabets, numbers, spaces, and hyphens"),
    plateNumber: yup
        .string()
        .required('Plate number is required')
        .matches(/^[a-zA-Z0-9 -]+$/, "Plate number must contain only alphabets, numbers, spaces, and hyphens"),
    complaints: yup
        .array()
        .of(yup.string())
        .required('Complaints is required'),
});
