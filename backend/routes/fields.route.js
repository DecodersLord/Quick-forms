import express from "express";
import { getFields, createField } from "../controllers/fields.controller.js";
const router = express.Router();

router.get("/getFields", getFields);
router.post("/createField", createField);

export default router;
