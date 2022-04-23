import { Request, Response } from 'express';
import { UserTypes } from '../models/enums/UserTypes';
import CourseRepository from '../repository/CourseRepository';
import CreateCourseService from '../services/CreateCourseService';
import UpdateCourseService from '../services/UpdateCourseService';

export default class CourseController {
  public async crate(req: Request, res: Response): Promise<Response> {
    try {
      const createCourseService = new CreateCourseService();
      const {title, teacherId, durationInMinutes} = req.body;
      const course = await createCourseService.execute({ title, teacherId, durationInMinutes })

      return res.status(200).json(course);
    } catch (error) {
      
      return res.status(400).json({ error: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const updateCourseService = new UpdateCourseService();
      const { title, teacherId, durationInMinutes} = req.body;
      const { id } = req.params

      const courseUpdated = await updateCourseService.execute({ 
        id,
        title, 
        teacherId, 
        durationInMinutes, 
        userAuth: { userType: UserTypes.Teacher} 
      })

      return res.status(200).json(courseUpdated);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message });
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const courseRepository = new CourseRepository();
      const courses = await courseRepository.getAllCourses();

      return res.status(200).json(courses);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const courseRepository = new CourseRepository();
      const { id } = req.params
      const courses = await courseRepository.delete(id);

      return res.status(200).send();
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message });
    }
  }
}