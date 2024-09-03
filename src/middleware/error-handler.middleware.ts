import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong");
};
