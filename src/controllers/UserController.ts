import { Request, Response } from 'express';
import { UserTypes } from '../models/enums/UserTypes';
import UserRepository from '../repository/UserRepository';
import CreateUserService from '../services/CreateUserService';
import UpdateUserSerice from '../services/UpdateUserService';


export default class UserController {
  
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const createUserService = new CreateUserService();

      const { name, email, password, userType } = req.body;
      userType.to
      userType.toString()
      const user = await createUserService.execute({name, email, password, userType: userType as UserTypes});
      
      return res.status(200).json(user);
    } catch(e) {
      return res.status(400).json(e);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const updateUserService = new UpdateUserSerice();
      const { name, email, userType} = req.body;
      const { id } = req.params
      const userAuth = req.user;

      const userDataUptade = {
        id,
        name,
        email,
        userType
      }
      
      const user = await updateUserService.execute(userAuth, userDataUptade)

      return res.status(200).json(user);
    }catch (error){
      return res.status(400).json(error);
    }
    }

  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const userRepository = new UserRepository();
  
      const users = await userRepository.getAllUsers();
  
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    } 
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const userAuth = req.user;
    const { id } = req.params

    if((userAuth.userType === UserTypes.Student || userAuth.userType === UserTypes.Teacher) && userAuth.id != id)
      return res.status(401).json({status: "error", message: "Operação não autoriazada"})
    
    try {
      const userRepository = new UserRepository();

      await userRepository.deleteUserById(id)
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json(error);
    }


  }
}