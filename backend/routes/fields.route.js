import express from "express";
import protectRoute from "../middleware/protectRoutes.js";
import { getFields, createField } from "../controllers/fields.controller.js";
const router = express.Router();

router.get("/getFields", protectRoute, getFields);
router.post("/createField", protectRoute, createField);

export default router;
