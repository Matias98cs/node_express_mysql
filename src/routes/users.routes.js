import { Router } from "express";
import {
  createUser,
  deleteUser,
  loginUser,
} from "../controllers/singup.controller.js";

const router = Router();

router.get("/user", loginUser);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);

export default router;
