import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";
import dbTestRoute from "./routes/db-test.route.js";
import healthRoute from "./routes/health.route.js";
import projectRouter from "./routes/project.route.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "ShipLoop AI is running" });
});

app.use("/api/health", healthRoute);
app.use("/api/db-test", dbTestRoute);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.use("/api/projects", projectRouter);

export default app;
