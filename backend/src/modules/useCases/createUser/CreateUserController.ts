import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, data_nascimento, cpf, emprestimo, uf, parcelas } = request.body

    const value = await this.createUserUseCase.execute({ nome, data_nascimento, cpf, emprestimo, uf, parcelas  })

    if(value === 'error') {
      return response.status(400).json({value: 'BAD REQUEST'})
    }

    return response.status(201).json({ value, parcelas, emprestimo })
  }
}

export { CreateUserController }