import express from "express";
import publicRouter from "../route/public.route";

const app = express();

app.use(express.json());

app.use("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(publicRouter)

export default app;
