import { Request, Response } from 'express';
import controllDeleteUser from '../../controllers/Users/controllDeleteUser.js';

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await controllDeleteUser(id);
    return res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default deleteUser;