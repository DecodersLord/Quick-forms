import express from "express";
import protectRoute from "../middleware/protectRoutes.js";
import { getForms, createForms } from "../controllers/forms.controller.js";
const router = express.Router();

router.get("/getForms", protectRoute, getForms);
router.post("/createForms", protectRoute, createForms);

export default router;
