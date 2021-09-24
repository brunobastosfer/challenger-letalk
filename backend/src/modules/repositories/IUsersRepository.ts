import { User } from "../entities/User";

interface ICreateUserDTO {
  nome: string;
  cpf: string;
  data_nascimento: Date;
  uf: string;
  emprestimo: string;
}

interface IUsersRepository {
  create({ nome, cpf, data_nascimento, emprestimo, uf }: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO }