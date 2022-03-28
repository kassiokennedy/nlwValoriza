// Entidades são tabelas
// Entidade User é uma tabela User

// Entidade <-> ORM <-> BD (Users)
 
import {Entity} from "typeorm";

@Entity("users")
class User {

}

export {User}