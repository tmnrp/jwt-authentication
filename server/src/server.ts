import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";
import { logger } from "./middleware/logger";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";

//
dotenv.config({ path: "./.env.dev" });

//
const app: Application = express();
const PORT = process.env.PORT || 3001;

//
app.use(logger);

//
app.use(cors(corsOptions));

//
app.use(express.json());

//
app.use(cookieParser());

//
app.use(errorHandler);

//
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
