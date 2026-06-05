import { Router } from "express";

const healthRoute = Router();

healthRoute.get("/", (_req, res) => {
  res.status(200).json({ status: `ok`, message: `ShipLoop AI API is running` });
});

export default healthRoute;
