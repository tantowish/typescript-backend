import { Request, Response } from "express";
import prisma from "../app/database";

export const getData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.data.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const createData = async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;
    const data = await prisma.data.create({
      data: { title, body },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to create data" });
  }
};
