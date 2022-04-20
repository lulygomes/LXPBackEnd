import User from "../models/User";
import UserRepository from "../repository/UserRepository";

export default class CreateUserService {
  public async execute({name, email, password, userType}: User): Promise<User> {
    const userRepository = new UserRepository();

    const userExist = await userRepository.findUserByEmail(email);
    if(userExist) throw new Error("Falha ao criar o usuário");

    const user = userRepository.createUser({name, email, password, userType})
    return user;
  }
}