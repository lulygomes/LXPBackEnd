import Answer from "../models/Answer";
import dbConnection from "./dbConnection";

export default class AnswerRepository {
  public async create(answerData: Answer): Promise<Answer> {
    const question = await dbConnection.question.findFirst({
      where : {
        id: answerData.questionId
      }
    })
    
    if (question?.open) {
      await dbConnection.question.update({
        where: {
          id: question.id
        },
        data: {
          open: false
        }
      });
    }

    return await dbConnection.answer.create({
      data: {
        text: answerData.text,
        questionId: answerData.questionId,
        teacherId: answerData.teacherId
      }
    });
  }

}