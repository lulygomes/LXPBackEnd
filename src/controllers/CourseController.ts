import { Request, Response } from 'express';
import { UserTypes } from '../models/enums/UserTypes';
import CourseRepository from '../repository/CourseRepository';
import CreateAnswerService from '../services/CreateAnswerService';
import CreateCourseService from '../services/CreateCourseService';
import CreateQuestionService from '../services/CreateQuestionService';
import UpdateCourseService from '../services/UpdateCourseService';

export default class CourseController {
  public async crate(req: Request, res: Response): Promise<Response> {
    const userAuth = req.user;
    if(userAuth.userType != UserTypes.Adm && userAuth.userType != UserTypes.Teacher) 
      return res.status(401).json({status: "error", message: "Operação não autoriazada"})

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
    const userAuth = req.user;
    if(userAuth.userType != UserTypes.Adm && userAuth.userType != UserTypes.Teacher) 
      return res.status(401).json({status: "error", message: "Operação não autoriazada"})

    try {
      const updateCourseService = new UpdateCourseService();
      const { title, teacherId, durationInMinutes} = req.body;
      const { id } = req.params;

      const courseDataToUpdate = {
        id,
        title, 
        teacherId, 
        durationInMinutes, 
      }

      const courseUpdated = await updateCourseService.execute(courseDataToUpdate)

      return res.status(200).json(courseUpdated);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const courseRepository = new CourseRepository();
      const query = req.query;

      const offset: number = !!query.offset ? parseInt(query.offset as string) : 0
      const take: number = !!query.take ? parseInt(query.take as string) : 5

      const courses = await courseRepository.getAllCourses(offset, take);

      return res.status(200).json(courses);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const userAuth = req.user;
    if(userAuth.userType != UserTypes.Adm && userAuth.userType != UserTypes.Teacher) 
      return res.status(401).json({status: "error", message: "Operação não autoriazada"})
  
    try {
      const courseRepository = new CourseRepository();
      const { id } = req.params
      await courseRepository.delete(id);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  
  public async addQuestion(req: Request, res: Response): Promise<Response> {
    try {
      const createQuestionService = new CreateQuestionService();
      const { text, courseId } = req.body;
      const userAuth = req.user;

      const question = await createQuestionService.execute({text, courseId, studentId: userAuth.id});

      return res.status(200).send(question);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async addAnswer(req: Request, res: Response): Promise<Response> {
    const userAuth = req.user
    if(userAuth.userType != UserTypes.Teacher)
      return res.status(401).json({error: "Operação não autorizada"})

    try {
      const createanswerService = new CreateAnswerService();
      const { text, questionId } = req.body;

      const answer = await createanswerService.execute({text, questionId, teacherId: userAuth.id});

      return res.status(200).send(answer);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}