import express from "express";
import cors from "cors";
import routes from "@/api/v1/routes";
import authRouters from "@/api/v1/auth/routes";

const app = express();

app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  if (req.originalUrl.indexOf("webhook") !== -1) {
    // Skip json parsing for webhook
    next();
  } else {
    express.json()(req, res, next);
  }
});

app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api/v1/", routes);
app.use("/api/v1/auth/", authRouters);

export default app;
