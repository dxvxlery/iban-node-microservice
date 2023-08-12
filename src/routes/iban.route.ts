import * as express from "express";
const router = express.Router();

import { ValidateService } from "../services/validate_service";
import { IbanController } from "../controllers/iban.controller";

router.get("/bankData/:iban", ValidateService.validateIban, IbanController.getByIban);

export default router;
