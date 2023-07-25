import { Router } from "express";
import { createUser, loginUser } from "../controllers/singup.controller.js";

const router = Router();

router.get("/user", loginUser);
router.post("/user", createUser);

export default router;
