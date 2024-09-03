import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const helloWorld = async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Hello World");
};