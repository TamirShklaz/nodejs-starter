import { Router } from "express";
import { tryCatch } from "@/utils/try-catch";
import { errorHandler } from "@/middleware/error-handler.middleware";
import { healthCheck } from "@/api/v1/controller";

export const router = Router();

router.get("/health-check", tryCatch(healthCheck));
router.use(errorHandler);

export default router;
