import { Request, Response } from 'express';
import getAllCities from '../../controllers/Cities/controllGetCities.js';

const getCities = async (req: Request, res: Response) => {
  try {
    const users = await getAllCities(req);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default getCities;