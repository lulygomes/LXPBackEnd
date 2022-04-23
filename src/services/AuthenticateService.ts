import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserTypes } from '../models/enums/UserTypes';
import UserRepository from "../repository/UserRepository";
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string,
  user: {
    id: string | undefined,
    email: string,
    userType: UserTypes
  }
}

export default class AuthenticateService {
  public async execute({email, password}: IRequest): Promise<IResponse> {
    const userRepository = new UserRepository();

    const user = await userRepository.findUserByEmail(email);
    if(!user) throw new AppError('Usuário ou senha inválido', 401);

    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) throw new AppError('Usuário ou senha inválido',401);

    const token = sign({
      user: {
        id: user.id,
        email: user.email,
        userType: user.userType,
      }
    }, 
    authConfig.jwt.secret,
    {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      token, 
      user: {
        id: user.id, 
        email: user.email, 
        userType: user.userType
      }}
  }
}