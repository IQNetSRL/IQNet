import { Request, Response } from "express";
import controllPostCities from "../../controllers/Cities/controllPostCities.js";

const postCities = async (req: Request, res: Response) => {
  req
  try {
    const createdCities = await controllPostCities();
    res.status(201).json({ cities: createdCities });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default postCities;
