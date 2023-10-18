import { Router } from 'express';
import getCities from '../handlers/Cities/getCities.js';
import postCities from '../handlers/Cities/postCities.js';

const citiesRouter = Router();

citiesRouter.get("/", getCities);

citiesRouter.post("/", postCities);

export default citiesRouter;