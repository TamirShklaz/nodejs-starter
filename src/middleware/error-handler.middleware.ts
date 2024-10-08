import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "@/errors/not-founder.error";
import { UnauthorizedError } from "@/errors/unauthorized.error";
import { InvalidBodyError } from "@/errors/invalid-body.errror";
import { AuthError } from "@/errors/auth.error";

export const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  if (err instanceof NotFoundError) {
    return res.status(err.status).send({
      message: err.message,
      details: err.details,
    });
  }
  if (err instanceof UnauthorizedError) {
    return res.status(err.status).send({
      message: err.message,
      details: err.details,
    });
  }
  if (err instanceof InvalidBodyError) {
    return res.status(err.status).send({
      message: err.message,
      details: err.details,
    });
  }
  if (err instanceof AuthError) {
    return res.status(err.status).send({
      message: err.message,
      details: err.details,
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Something went wrong" });
};
