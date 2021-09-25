import { User } from "../entities/User"

interface ICreateUserDTO {
  nome: string;
  cpf: string;
  data_nascimento: Date;
  uf: string;
  emprestimo: string;
  parcelas: number;
}

interface IUsersRepository {
  create({ nome, cpf, data_nascimento, emprestimo, uf, parcelas }: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  filterByName(cpf: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO }