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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewComplaint = exports.getSingleDriverReport = exports.findDriver = exports.getDrivers = exports.addDriver = void 0;
const driverModel_1 = require("../models/driverModel");
const addDriver = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { driverName, carModel, plateNumber, complaints, picture } = req.body;
        const searchDriver = yield driverModel_1.driverModel.findOne({ driverName });
        if (searchDriver)
            return res.status(400).send({ message: "Driver already exists in database." });
        const newDriver = driverModel_1.driverModel.create({
            driverName,
            carModel,
            plateNumber,
            complaints,
            picture
        });
        return res.status(201).send({ message: "Driver added successfully." });
    }
    catch (error) {
        next(error);
    }
});
exports.addDriver = addDriver;
const getDrivers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drivers = yield driverModel_1.driverModel.find({}, { _id: 0, __v: 0, complaints: 0, picture: 0 });
        if (drivers.length === 0)
            return res.status(200).send({ message: "No drivers found." });
        return res.status(200).send(drivers);
    }
    catch (error) {
        next(error);
    }
});
exports.getDrivers = getDrivers;
const findDriver = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { driverName, plateNumber } = req.body;
        const driver = yield driverModel_1.driverModel.findOne({
            $or: [
                { driverName },
                { plateNumber }
            ]
        });
        if (!driver)
            return res.status(404).send({ message: "Driver not found." });
        return res.status(200).send(driver);
    }
    catch (error) {
        next(error);
    }
});
exports.findDriver = findDriver;
const getSingleDriverReport = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { driverName } = req.params;
        const driver = yield driverModel_1.driverModel.findOne({ driverName });
        if (!driver)
            return res.status(404).send({ message: "Driver not found." });
        return res.status(200).send(driver);
    }
    catch (error) {
    }
});
exports.getSingleDriverReport = getSingleDriverReport;
const addNewComplaint = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { driverName, complaint } = req.body;
        const driver = yield driverModel_1.driverModel.findOne({ driverName });
        if (!driver)
            return res.status(404).send({ message: "Driver not found." });
        driver.complaints.push(complaint);
        yield driver.save();
        return res.status(200).send({ message: "Complaint added successfully." });
    }
    catch (error) {
        next(error);
    }
});
exports.addNewComplaint = addNewComplaint;
