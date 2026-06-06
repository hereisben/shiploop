import { Router } from "express";
import {
  createProjectSchema,
  projectParamsSchema,
  updateProjectSchema,
} from "../schemas/project.schema.js";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../services/project.service.js";

const projectRouter = Router();

projectRouter.post("/", async (req, res, next) => {
  try {
    const parsedBody = createProjectSchema.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: `Invalid project data`,
      });
    }

    const projects = await createProject(parsedBody.data);

    return res.status(201).json({
      success: true,
      message: `Project created successfully`,
      data: projects,
    });
  } catch (errorCreateProject) {
    next(errorCreateProject);
  }
});

projectRouter.get("/", async (_req, res, next) => {
  try {
    const projects = await getProjects();

    return res.status(200).json({
      success: true,
      message: `Get projects successfully`,
      data: projects,
    });
  } catch (errorGetProjects) {
    next(errorGetProjects);
  }
});

projectRouter.get("/:projectId", async (req, res, next) => {
  try {
    const parsedParam = projectParamsSchema.safeParse(req.params);

    if (!parsedParam.success) {
      return res.status(400).json({
        success: false,
        message: `Invalid project ID`,
      });
    }

    const project = await getProjectById(parsedParam.data?.projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Failed to fetch project`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Get project successfully`,
      data: project,
    });
  } catch (errorGetProjectsById) {
    next(errorGetProjectsById);
  }
});

projectRouter.patch("/:projectId", async (req, res, next) => {
  try {
    const parsedParam = projectParamsSchema.safeParse(req.params);

    if (!parsedParam.success) {
      return res.status(400).json({
        success: false,
        message: `Invalid project ID`,
      });
    }

    const { projectId } = parsedParam.data;

    const parsedBody = updateProjectSchema.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: `Invalid project data`,
      });
    }

    const project = await updateProject(projectId, parsedBody.data);

    if (project.count === 0) {
      return res.status(404).json({
        success: false,
        message: `Project not found`,
      });
    }

    const updatedProject = await getProjectById(projectId);

    return res.status(200).json({
      success: true,
      message: `Update project successfully`,
      data: updateProject,
    });
  } catch (errorUpdateProject) {
    next(errorUpdateProject);
  }
});

projectRouter.delete("/:projectId", async (req, res, next) => {
  try {
    const parsedParam = projectParamsSchema.safeParse(req.params);

    if (!parsedParam.success) {
      return res.status(400).json({
        success: false,
        message: `Invalid project ID`,
      });
    }

    const { projectId } = parsedParam.data;

    const project = await deleteProject(projectId);

    if (project.count === 0) {
      return res.status(404).json({
        success: false,
        message: `Project not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Delete project successfully`,
    });
  } catch (errorDeleteProject) {
    next(errorDeleteProject);
  }
});

export default projectRouter;
