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

export default class UserRepository {
  public async createUser(userData: User): Promise<User> {
    const newUser = await dbConnection.user.create({
      data: userData
    })

    return newUser;
  }

  public async findUserById(userId: string): Promise<User | null>{
    const user = await dbConnection.user.findUnique({
      where: {
        id: userId,
      }
    })

    return user;
  }
  public async findUserByEmail(userEmail: string): Promise<User | null>{
    const user = await dbConnection.user.findUnique({
      where: {
        email: userEmail,
      }
    })

    return user;
  }

  public async updateUserById(userId: string, userData: User): Promise<User>{
    const userUpdated = await dbConnection.user.update({
      where: {
        id: userId
      },
      data: userData
    })

    return userUpdated
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
      }
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