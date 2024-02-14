import { Router } from "express";
import {
    addDriver,
    findDriver,
    getDrivers,
    getSingleDriverReport, 
    addNewComplaint
} from "../controllers/drivers";

import { validate } from "../middlewares/validator";
import { infoValidatorSchema } from "../middlewares/infoValidator";

const router = Router();

router.post("/add-driver", validate(infoValidatorSchema), addDriver);
router.get("/get-drivers", getDrivers);
router.post("/find-driver", findDriver);
router.get("/get-single-driver-report/:driverName", getSingleDriverReport);
router.post("/add-new-complaint", addNewComplaint);

export default router;