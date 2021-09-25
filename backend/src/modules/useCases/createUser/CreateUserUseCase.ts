import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  nome: string;
  data_nascimento: Date;
  cpf: string;
  emprestimo: string;
  uf: string;
  parcelas: number;
}

interface Debit {
  saldoDevedor: number;
  cota: number;
  valorParcela: number;
}

const calculate = ({ cota, saldoDevedor, valorParcela }: Debit ) => {
  let valorAjustado = saldoDevedor;
  let cliente = {
    juros: [],
    devedor: [],
    devedorAjustado: [],
    mes: saldoDevedor / valorParcela,
  } as any;

  for(let index = 1; index <= cliente.mes+1; index+= 1) {
    let jurosCalc = (cota / 100) * valorAjustado
    if(valorAjustado >= valorParcela) {
      cliente.juros.push(jurosCalc.toFixed(2))
      cliente.devedorAjustado.push(valorAjustado + jurosCalc)
      valorAjustado += jurosCalc
      cliente.devedor.push(valorAjustado - valorParcela)
      valorAjustado -= valorParcela
    } else {
      cliente.juros.push(jurosCalc.toFixed(2));
      cliente.devedorAjustado.push(valorAjustado);
    }
  }
  return cliente
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