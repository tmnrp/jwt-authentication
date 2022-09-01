import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import path from "path";
import fs, { promises as fsPromises } from "fs";
import { NextFunction, Request, Response } from "express";

//
export const logEvents = async (message: string, logFileName: string) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  //
  try {
    const logFilePath = path.join(__dirname, "..", "logs");
    const logFileNamePath = path.join(__dirname, "..", "logs", logFileName);
    !fs.existsSync(logFilePath) && (await fsPromises.mkdir(logFilePath));

    await fsPromises.appendFile(logFileNamePath, logItem);
  } catch (error) {
    console.error(error);
  }
};

//
export const logger = (req: Request, res: Response, next: NextFunction) => {
  const message = `${req.method}\t${req.url}\t${req.headers.origin}`;
  logEvents(message, "requests.log");
  console.log("logger", message);

  //
  next();
};
