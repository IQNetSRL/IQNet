import { Request, Response } from 'express';
import controllPostUser from '../../controllers/Users/controllPostUser';

const postUser = async (req: Request, res: Response) => {
  try {
    const newUser = await controllPostUser(req);
    res.status(201).json({ user: newUser });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default postUser;