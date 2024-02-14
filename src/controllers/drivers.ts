import { Request, Response, NextFunction } from 'express';
import { driverModel } from '../models/driverModel';
import { Driver } from '../types/driverTypes';

export const addDriver = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { driverName, carModel, plateNumber, complaints, picture }: Driver = req.body;
        const searchDriver = await driverModel.findOne({ driverName });
        if (searchDriver) return res.status(400).send({ message: "Driver already exists in database." });

        

        const newDriver = driverModel.create({
            driverName,
            carModel,
            plateNumber,
            complaints,
            picture
        });
        return res.status(201).send({ message: "Driver added successfully." });
    } catch (error) {
        next(error);
    }
}

export const getDrivers = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const drivers: Driver[] = await driverModel.find({}, { _id: 0, __v: 0, complaints: 0, picture: 0});
        if (drivers.length === 0) return res.status(200).send({ message: "No drivers found." });
        return res.status(200).send(drivers);
    } catch (error) {
        next(error);
    }
}

export const findDriver = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { driverName, plateNumber } = req.body;
        const driver: Driver | null = await driverModel.findOne({
            $or: [
                { driverName },
                { plateNumber }
            ]
        });
        if (!driver) return res.status(404).send({ message: "Driver not found." });
        return res.status(200).send(driver);
    } catch (error) {
        next(error);
    }
}

export const getSingleDriverReport = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { driverName } = req.params;
        const driver: Driver | null = await driverModel.findOne({ driverName });
        if (!driver) return res.status(404).send({ message: "Driver not found." });
        return res.status(200).send(driver);
    } catch (error) {
        
    }
}

export const addNewComplaint = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { driverName, complaint } = req.body;
        const driver: Driver | null = await driverModel.findOne({ driverName });
        if (!driver) return res.status(404).send({ message: "Driver not found." });
        driver.complaints.push(complaint);
        await driver.save();
        return res.status(200).send({ message: "Complaint added successfully." });
    } catch (error) {
        next(error);
    }
}