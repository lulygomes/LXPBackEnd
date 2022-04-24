import AppError from "../errors/AppError";
import Answer from "../models/Answer";
import AnswerRepository from "../repository/AnswerRepository";
import CourseRepository from "../repository/CourseRepository";

export default class CreateAnswerService {
  public async execute({questionId, teacherId, text}: Answer): Promise<void> {
    const answerRepository = new AnswerRepository();
    const courseRepository = new CourseRepository();

    const course = await courseRepository.getCourseByQuestionId(questionId);
    if(!course) throw new AppError("Pergunta não encontrada");

    if(teacherId != course.teacherId) 
      throw new AppError("O curso não está vinculado ao professor solicitante");

    await answerRepository.create({questionId, teacherId, text})
    return ;
  }
}