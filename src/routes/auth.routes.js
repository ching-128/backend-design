import { Router } from "express";
import { userRegistationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";
import { registerUser } from "../controllers/auth.controller.js";

const router = Router();

router
    .route("/register")
    .post(userRegistationValidator(), validate, registerUser);

export default router;