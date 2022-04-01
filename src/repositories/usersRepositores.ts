import { EntityRepository, Repository } from "typeorm"
//entidade
import { User } from "../entity/User"

// repositorio da entidade
@EntityRepository(User)
class UserRepositoires extends Repository<User>{

}

export { UserRepositoires }