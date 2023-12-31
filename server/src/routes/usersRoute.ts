import { Router } from 'express';
import getUsers from '../handlers/Users/getUsers.js';
import getUser from '../handlers/Users/getUserById.js';
import deleteUser from '../handlers/Users/deleteUser.js';
import postUser from '../handlers/Users/postUser.js';

const usersRouter = Router();

usersRouter.post("/", postUser);

usersRouter.get("/", getUsers);

usersRouter.get("/user/:id", getUser);

usersRouter.delete("/user/:id", deleteUser);

export default usersRouter;