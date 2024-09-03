import { Router } from "express";
import { tryCatch } from "../utils/try-catch";
import { helloWorld } from "./controller";
import { errorHandler } from "../middleware/error-handler.middleware";

const router = Router();

router.get("/hello-world", tryCatch(helloWorld));

router.use(errorHandler);

export default router;