import { Router } from 'express';
import usersRouter from './usersRoute.js';

const router = Router();

router.use("/users", usersRouter);

export default router;