import { Router } from 'express';
import getUsers from '../handlers/Users/getUsers';
import getUser from '../handlers/Users/getUserById';
import deleteUser from '../handlers/Users/deleteUser';
import postUser from '../handlers/Users/postUser';

const usersRouter = Router();

usersRouter.post("/", postUser);

usersRouter.get("/", getUsers);

usersRouter.get("/user/:id", getUser);

usersRouter.delete("/user/:id", deleteUser);

export default usersRouter;