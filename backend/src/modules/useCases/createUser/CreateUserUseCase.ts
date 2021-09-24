import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  nome: string;
  data_nascimento: Date;
  cpf: string;
  emprestimo: string;
  uf: string;
  parcelas: number;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute({ nome,data_nascimento,cpf,emprestimo,uf, parcelas }: IRequest): Promise<string | number > {
    if(Number(emprestimo) >= 50000) {
      await this.usersRepository.create({ nome, data_nascimento, cpf, emprestimo, uf, parcelas })
    } else
      return 'error'
    
    if(uf === 'MG') {
      return 1
    }
    
    if(uf === 'SP') {
      return 0.8
    }
    
    if(uf === 'RJ') {
      return 0.9
    }
    
    if(uf === 'ES') {
      return 1.11
    }
  }
}

export { CreateUserUseCase }