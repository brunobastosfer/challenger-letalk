import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ nome, cpf, data_nascimento, emprestimo, uf, parcelas }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      nome,
      data_nascimento,
      cpf,
      emprestimo,
      uf,
      parcelas
    })
    await this.repository.save(user)
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users
  }

  async filterByName(cpf: string): Promise<User> {
    const find = await this.repository.findOne({ cpf })
    return find
  }
}

export { UserRepository }