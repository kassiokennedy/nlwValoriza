import { getCustomRepository } from "typeorm"
import { UserRepositoires } from "../repositories/usersRepositores"

interface IUserRequest{
  name:string
  email: string
  admin?:boolean //o simbolo '?' significa que o atributo é opcional

} 
class CreateUserService {

  async execute({ name, email, admin}: IUserRequest){
    const usersRepository = getCustomRepository(UserRepositoires);
    //verifica se o email ta preenchido
    if(!email){
      throw new Error("Email incorrect");
    }

    // a funçao abaixo verifica se um usuario ja existe atraves do email e depois verifica 
    const usersAlreadyExists = await usersRepository.findOne({
      email,
    }) 

    //se o usuario existir, um erro é lançado
    if(usersAlreadyExists){
      throw new Error("User already exists");
    }

    //abaixo sao os atributos da criaçao do usuario
    const user = usersRepository.create({
    name,
    email,
    admin,
    });

    await usersRepository.save(user);

    return user;

    } 
}
export {CreateUserService}