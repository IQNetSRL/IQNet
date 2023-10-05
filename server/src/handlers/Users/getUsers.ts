import { Request, Response } from 'express';
import getAllUsers from '../../controllers/Users/controllGetUser.js';

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers(req);
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default getUsers;