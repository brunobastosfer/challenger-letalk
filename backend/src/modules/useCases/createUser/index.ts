import { UserRepository } from "../../repositories/implementation/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

export default (): CreateUserController => {
  const usersRepository = new UserRepository();

  const createUserUseCase = new CreateUserUseCase(usersRepository);

  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}