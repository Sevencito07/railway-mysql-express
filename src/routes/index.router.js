import { Router } from "express";
 import { createdP } from "../db.js";
import { indexDb } from "../constrollers/indexControl.js";

const  router = Router()


router.get('/ping', indexDb)

export default router;

