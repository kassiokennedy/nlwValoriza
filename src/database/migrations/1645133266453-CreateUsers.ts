import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1645133266453 implements MigrationInterface {
    
    // metodo up cria tabela
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name: "users",
                    columns:[
                        {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "admin",
                            type: "boolean",
                            default: false
                        },
                        {
                            // ele capta a hora em que esta sendo criado o objeto
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default:"now()"
                        }
                    ]
                })
        )
    }
    
    // metodo down remove a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
