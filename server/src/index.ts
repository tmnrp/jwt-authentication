import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";

//
dotenv.config({ path: "./.env.dev" });

//
const app: Application = express();
const PORT = process.env.PORT || 3001;

//
app.use(cors(corsOptions));

//
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
