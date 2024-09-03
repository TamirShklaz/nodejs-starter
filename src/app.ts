import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import cors from "cors";
import helloWorldRoutes from "./api/routes";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.get("/healthcheck", async (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.use("/api/v1/", helloWorldRoutes);

export default app;
