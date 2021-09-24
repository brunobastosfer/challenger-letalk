import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  nome: string;
  data_nascimento: Date;
  cpf: string;
  emprestimo: string;
  uf: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute({ nome,data_nascimento,cpf,emprestimo,uf }: IRequest): Promise<void> {
    this.usersRepository.create({ nome, data_nascimento, cpf, emprestimo, uf })
  }
}

export { CreateUserUseCase }