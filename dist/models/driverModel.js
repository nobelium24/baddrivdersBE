"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const driverSchema = new mongoose_1.default.Schema({
    driverName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    carModel: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true,
        unique: true
    },
    complaints: {
        type: [String],
        required: true
    },
    picture: {
        type: String,
    }
});
exports.driverModel = mongoose_1.default.models.driver || mongoose_1.default.model("driver", driverSchema);
