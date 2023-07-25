import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployeById,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeById);

router.post("/employees", createEmployee);

router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;
