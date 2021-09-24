import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ nome, cpf, data_nascimento, emprestimo, uf }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      nome,
      data_nascimento,
      cpf,
      emprestimo,
      uf
    })
    await this.repository.save(user)
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users
  }
}

export { UserRepository }