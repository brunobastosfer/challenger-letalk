import { v4 as uuidv4 } from 'uuid';
import {Column, CreateDateColumn, Entity, PrimaryColumn} from 'typeorm';
 
@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  data_nascimento: Date;

  @Column()
  uf: string;

  @Column()
  emprestimo: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User }