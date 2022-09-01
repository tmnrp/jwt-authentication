import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { logEvents } from "./logger";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);

  //
  res.status(res.statusCode || 500);
  res.json({ message: err.message });
};
