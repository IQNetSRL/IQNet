import { Router } from 'express';
import usersRouter from './usersRoute.js';
import citiesRouter from './citiesRoute.js';

const router = Router();

router.use("/users", usersRouter);

router.use("/cities", citiesRouter);

export default router;