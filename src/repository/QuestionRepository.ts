import Question from "../models/Question";
import dbConnection from "./dbConnection";

export default class QuestionRepository {
  public async create(questionData: Question): Promise<Question> {
    console.log(questionData);
    const question = await dbConnection.question.create({
      data: {
        text: questionData.text,
        studentId: questionData.studentId,
        courseId: questionData.courseId
      }
    });

    return question;
  }

  public async getUserQuestionsByCourse(userId: string, courseId:string): Promise<Question[]> {
    return await dbConnection
      .question
      .findMany({
        where: {
          studentId: userId,
          AND: [
            {
              courseId: courseId
            }
          ]
        }
      })
  }
}