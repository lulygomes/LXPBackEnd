import { Request, Response } from 'express';
import { UserTypes } from '../models/enums/UserTypes';
import CourseRepository from '../repository/CourseRepository';
import CreateUserService from '../services/CreateUserService';

export default class TeacherController {

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const createUserService = new CreateUserService();
      // const userAuth = req.user;
      const { name, email, password } = req.body;

      if (!name || !email || !password)
        return res.status(400).json({err: "Dados inválidos."})

      // if (userAuth.userType === UserTypes.Student)
      //   return res.status(401).json({err: "Operação não autoriazada."})

      const userType = UserTypes.Teacher
      await createUserService.execute({name, email, password, userType});
      
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json(error);
    } 
  }

  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const courseRepository = new CourseRepository();
      const { id } = req.user;
      const query = req.query;

      const offset: number = !!query.offset ? parseInt(query.offset as string) : 0
      const take: number = !!query.take ? parseInt(query.take as string) : 5

      const users = await courseRepository.getCoursesByTeacherId(id, offset, take);
  
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    } 
  }
}
