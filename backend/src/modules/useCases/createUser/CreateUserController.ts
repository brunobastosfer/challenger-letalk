import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, data_nascimento, cpf, emprestimo, uf } = request.body

    await this.createUserUseCase.execute({ nome, data_nascimento, cpf, emprestimo, uf  })

    return response.status(201).json({ nome,data_nascimento,cpf,emprestimo,uf  })
  }
}

export { CreateUserController }