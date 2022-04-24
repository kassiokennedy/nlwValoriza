// Entidades são tabelas
// Entidade User é uma tabela User

// Entidade <-> ORM <-> BD (Users)
 
import {Entity, PrimaryColumn, Column,CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("users") // a entidade é uma tabela
class User {
  // abaixo sao as colunas da tabela

  @PrimaryColumn()
 readonly id: string;
 
 @Column()
 name: string;
 
 @Column()
 email: string;

 @Column()
 admin: boolean;

 @CreateDateColumn()
 created_at: Date;

 @CreateDateColumn()
 updated_at: Date;

 constructor(){
   if(!this.id){
     this.id = uuid()
   }
 }

}

export {User}