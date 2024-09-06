import { Router } from "express";
import { validateBody } from "@/middleware/validate-body.middleware";
import { tryCatch } from "@/utils/try-catch";
import { errorHandler } from "@/middleware/error-handler.middleware";
import { login } from "@/api/v1/auth/controller";
import { loginSchema } from "@/schemas/login.schema";

const router = Router();

router.post("/login", validateBody(loginSchema), tryCatch(login));

router.use(errorHandler);

export default router;
