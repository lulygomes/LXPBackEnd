import { Request, Response } from 'express';
import CourseRepository from '../repository/CourseRepository';

export default class TeacherController {

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
