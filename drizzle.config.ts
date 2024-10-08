import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  out: "./db/drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!
  }
});
