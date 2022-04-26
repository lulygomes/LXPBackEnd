import { hash } from 'bcrypt';
import AppError from '../errors/AppError';
import User from "../models/User";
import UserRepository from "../repository/UserRepository";
import {UserTypes} from '../models/enums/UserTypes';

interface UserDTO {
  name: string;
  email: string;
  password: string;
  userType: UserTypes
}

interface UserDTOOut {
  name: string;
  email: string;
}

export default class CreateUserService {
  public async execute({name, email, password, userType }: UserDTO): Promise<UserDTOOut> {
    const userRepository = new UserRepository();

    const userExist = await userRepository.findUserByEmail(email);
    if(userExist) throw new AppError("Falha ao criar o usuário, entre com um email válido.");

    const passwordHash = await hash(password, 8);
    const user = await userRepository.createUser({
      name, 
      email, 
      password: passwordHash, 
      userType,
    });
    
    return {
      name: user.name,
      email: user.email
    };
  }
}