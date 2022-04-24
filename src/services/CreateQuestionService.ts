import AppError from "../errors/AppError";
import Question from "../models/Question";
import QuestionRepository from "../repository/QuestionRepository";

export default class CreateQuestionService {
  public async execute({text, studentId, courseId}: Question): Promise<Question>{
    const questionRepository = new QuestionRepository();

    const studentQuestions = await questionRepository.getUserQuestionsByCourse(studentId, courseId);
    if(studentQuestions.length >= 2) throw new AppError("Você atingiu o limite de perguntas para esse curso");
    
    return await questionRepository.create({text, studentId, courseId});
  }
}