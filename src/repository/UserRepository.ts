import { UserTypes } from "../models/enums/UserTypes";
import User from "../models/User";
import dbConnection from "./dbConnection";

interface UserOut {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  userType?: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IUserDataToUpdade {
  id: string,
  name: string,
  email: string,
  userType: UserTypes
}

export default class UserRepository {
  public async createUser(userData: User): Promise<User> {
    const newUser = await dbConnection.user.create({
      data: userData
    })

    const userFormated: User = {
      ...newUser,
      userType: newUser.userType as UserTypes
    }
 
    return userFormated;
  }

  public async findUserById(userId: string): Promise<User | null >{
    const user = await dbConnection.user.findUnique({
      where: {
        id: userId,
      }
    })

    if (!user) return null;

    const userFormated: User  = {
      ...user,
      userType: user?.userType as UserTypes
    }
 
    return userFormated;
  }
  public async findUserByEmail(userEmail: string): Promise<User | null>{
    const user = await dbConnection.user.findUnique({
      where: {
        email: userEmail,
      }
    })

    if (!user) return null;
    
    const userFormated: User  = {
      ...user,
      userType: user?.userType as UserTypes
    }
 
    return userFormated;
  }

  public async updateUserById(userDataToUpdade: IUserDataToUpdade): Promise<User>{
    const userUpdated = await dbConnection.user.update({
      where: {
        id: userDataToUpdade.id
      },
      data: userDataToUpdade
    })
    
    const userFormated: User  = {
      ...userUpdated,
      userType: userUpdated?.userType as UserTypes
    }
 
    return userFormated;
  }

  public async getAllUsers(): Promise<UserOut[]>{
    return await dbConnection.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        userType: true,
        created_at: true,
        updated_at: true,
        questions: true
      },
    })
  }

  public async deleteUserById(userId: string): Promise<void>{
    await dbConnection.user.delete({
      where: {
        id: userId
      }
    })

    return
  }
}