"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drivers_1 = require("../controllers/drivers");
const validator_1 = require("../middlewares/validator");
const infoValidator_1 = require("../middlewares/infoValidator");
const router = (0, express_1.Router)();
router.post("/add-driver", (0, validator_1.validate)(infoValidator_1.infoValidatorSchema), drivers_1.addDriver);
router.get("/get-drivers", drivers_1.getDrivers);
router.post("/find-driver", drivers_1.findDriver);
router.get("/get-single-driver-report/:driverName", drivers_1.getSingleDriverReport);
router.post("/add-new-complaint", drivers_1.addNewComplaint);
exports.default = router;
