import { User } from "../../entities/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"

class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute(): Promise<User[]> {
    const users = this.usersRepository.list();
    return users
  }
}

export { ListUsersUseCase }