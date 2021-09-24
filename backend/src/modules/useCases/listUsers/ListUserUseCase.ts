import { User } from "src/modules/entities/User";
import { IUsersRepository } from "src/modules/repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute(): Promise<User[]> {
    const users = this.usersRepository.list();
    return users
  }
}

export { ListUsersUseCase }