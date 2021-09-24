import { Router } from 'express'

import listUsersController from '../modules/useCases/listUsers';
import createUserController from '../modules/useCases/createUser';

const usersRoute = Router();

usersRoute.post("/", (request, response) => createUserController().handle(request, response))
usersRoute.get("/", (request, response) => listUsersController().handle(request, response))

export { usersRoute }
