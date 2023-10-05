import { Request, Response } from 'express';
import getUserById from '../../controllers/Users/controllGetUserById.js';

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await getUserById(id);
    if (!response) {
      res.status(400).send("non-existent product");
    } else {
      res.status(201).json(response);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default getUser;