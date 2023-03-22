import { NextFunction, Request, Response } from "express";

export const growdeverValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next()
}
