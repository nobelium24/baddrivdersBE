import mongoose from "mongoose";
import { Driver } from "../types/driverTypes";

const driverSchema = new mongoose.Schema<Driver>({
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
})

export const driverModel = mongoose.models.driver || mongoose.model<Driver>("driver", driverSchema);
