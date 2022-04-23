import AppError from "../errors/AppError";
import User from "../models/User"
import UserRepository from "../repository/UserRepository";

export default class UpdateUserSerice {
  public async execute(id: string, {name, email, password, userType}: User): Promise<User>{
    const userRepository = new UserRepository();

    const userExist = await userRepository.findUserById(id);
    if(!userExist) throw new AppError("Falha ao atualizar o usuário");

    const userUpdated = await userRepository.updateUserById(id, {name, email, password, userType});

    return userUpdated;
  }
}