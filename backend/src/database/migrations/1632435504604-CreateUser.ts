import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1632435504604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "nome",
                            type: "varchar"
                        },
                        {
                            name: "cpf",
                            type: "varchar"
                        },
                        {
                            name: "data_nascimento",
                            type: "date"
                        },
                        {
                            name: "uf",
                            type: "varchar"
                        },
                        {
                            name: "emprestimo",
                            type: "varchar"
                        },
                        {
                            name: "parcelas",
                            type: "int"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
