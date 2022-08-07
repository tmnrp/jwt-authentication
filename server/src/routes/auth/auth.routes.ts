import { Router, Request, Response } from "express";

export const authRouter = Router();

//
authRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: `Hello ${process.env.NAME}` });
});

//
authRouter.post("/login", (req: Request, res: Response) => {
  const { unm, pwd } = req.body;

  res.status(200).send({
    message: `You are access login api. unm: ${unm} && pwd: ${pwd}`,
  });
});
