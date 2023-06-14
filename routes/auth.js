import express from "express";
import {welcome} from '../controllers/auth.js';

const router = express.Router();

// get(path,callback-function) to send request to localhost:8000
router.get("/api",welcome);


export default router;