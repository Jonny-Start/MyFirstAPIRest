import { Router } from "express";
import { ping } from "../controllers/index.controller.js";


const router = Router();

router.get('/api/ping', ping);

export default router