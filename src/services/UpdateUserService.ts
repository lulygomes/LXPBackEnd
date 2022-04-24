import AppError from "../errors/AppError";
import { UserTypes } from "../models/enums/UserTypes";
import User from "../models/User"
import UserRepository from "../repository/UserRepository";

interface IUserDataToUpdade {
    id: string,
    name: string,
    email: string,
    userType: UserTypes
  }

interface IUserAuth {
    id: string,
    userType: UserTypes
  }

export default class UpdateUserSerice {
  public async execute(userAuth: IUserAuth, userDataToUpdade: IUserDataToUpdade): Promise<User>{
    const userRepository = new UserRepository();

    const userToUpdate = await userRepository.findUserById(userDataToUpdade.id);
    if(!userToUpdate) throw new AppError("Falha ao atualizar o usuário");

    this.validateUserPermission(userToUpdate, userAuth, userDataToUpdade);

    const userUpdated = await userRepository.updateUserById(userDataToUpdade);

    return userUpdated;
  }

  private validateUserPermission(
    userToUpdate: User, 
    userAuth: IUserAuth, 
    userDataToUpdade: IUserDataToUpdade
    ): void {

    if(userAuth.userType === UserTypes.Student && userAuth.id != userToUpdate.id)
      throw new AppError("Operação não autoriazada", 401)
    
    if(userAuth.userType === UserTypes.Student && userDataToUpdade.userType != UserTypes.Student)
      throw new AppError("Operação não autoriazada", 401)

    if(userAuth.userType === UserTypes.Teacher && userToUpdate.userType === UserTypes.Adm)
      throw new AppError("Operação não autoriazada", 401)
  }
}