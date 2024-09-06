import { StatusCodes } from "http-status-codes";

export class UnauthorizedError extends Error {
  status: number;
  details?: string | object;

  constructor(message: string, details?: string | object) {
    super(message);
    this.name = "UnauthorizedError";
    this.status = StatusCodes.UNAUTHORIZED;
    this.details = details;
  }
}
