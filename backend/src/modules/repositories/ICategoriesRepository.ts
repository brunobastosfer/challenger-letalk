import { User } from "../entities/User";

interface ICreateUserDTO {
  nome: string;

  cpf: number;

  data_nascimento: Date;

  uf: string;

  emprestimo: number;
}

interface ICategoriesRepository {
  create({nome,cpf, data_nascimento, emprestimo, uf} : ICreateUserDTO) : Promise<void>;

  list(): Promise<User[]>;
}

export { ICategoriesRepository, ICreateUserDTO }