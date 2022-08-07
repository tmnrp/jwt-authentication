import express, { Application } from "express";
import * as dotenv from "dotenv";
import { routes } from "./routes/index.routes";
import { connectDB } from "./config/db";

//
dotenv.config({ path: "./.env.dev" });

//
const app: Application = express();
const port = 3001;

//connect to db
connectDB();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.use(routes);

//
try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
