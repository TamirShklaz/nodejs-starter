import { StatusCodes } from "http-status-codes";

export class AuthError extends Error {
  status: number;
  details?: string | object;

  constructor(message: string, details?: string | object) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
    this.details = details;
  }
}
