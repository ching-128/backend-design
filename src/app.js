import express from "express";
import userRouter from "./routes/auth.routes.js";

const app = express();

// middlewares

// routes
import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/users/", userRouter);

export default app;
