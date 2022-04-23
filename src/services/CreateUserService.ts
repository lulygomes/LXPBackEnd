import { hash } from 'bcrypt';
import AppError from '../errors/AppError';
import User from "../models/User";
import UserRepository from "../repository/UserRepository";

export default class CreateUserService {
  public async execute({name, email, password, userType}: User): Promise<User> {
    const userRepository = new UserRepository();

    const userExist = await userRepository.findUserByEmail(email);
    if(userExist) throw new AppError("Falha ao criar o usuário");

    const passwordHash = await hash(password, 8);

    const user = userRepository.createUser({
      name, 
      email, 
      password: passwordHash, 
      userType
    });
    
    return user;
  }
}