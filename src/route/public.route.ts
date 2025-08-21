import { Router } from "express";
import { createData, getData } from "../controller/data.controller";

const publicRouter = Router();

publicRouter.get("/api/data", getData);
publicRouter.post("/api/data", createData);

export default publicRouter;
