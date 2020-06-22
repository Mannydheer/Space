import { Request, Response, NextFunction } from "express";
import { Space } from "../services";

export const getIssPosition = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let serviceResponse = await Space.getIssPosition();
    if (!serviceResponse) {
      throw new Error("502 bad request.");
    }
    console.log(serviceResponse);
  } catch (error) {
    next(error);
  }
};
