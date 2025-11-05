import express from "express";
import { registrarUsuario } from "../controllers/userController";

const router = express.Router();

router.post("/register", registrarUsuario)

export default router;