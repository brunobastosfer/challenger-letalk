import { UserRepository } from "../../repositories/implementation/UsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUserUseCase";

export default(): ListUsersController => {
  const usersRepository = new UserRepository();

  const listUsersUseCase = new ListUsersUseCase(usersRepository)

  const listCategoryController = new ListUsersController(listUsersUseCase);

  return listCategoryController
}