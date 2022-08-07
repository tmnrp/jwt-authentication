import { Router } from "express";
import { authRouter } from "./auth/auth.routes";

//
export const routes = Router();

//
routes.use("/api/auth", authRouter);
