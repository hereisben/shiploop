import { Router } from "express";
import { prisma } from "./../lib/prisma.js";

const dbTestRoute = Router();

dbTestRoute.get("/", async (_req, res, next) => {
  try {
    const projectCount = await prisma.project.count();

    return res.status(200).json({
      success: true,
      message: `Database connection is working`,
      data: {
        projectCount,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default dbTestRoute;
