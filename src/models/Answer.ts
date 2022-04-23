import Question from "./Question";
import User from "./User";

export default class Answer {
  id?: string;
  questionId: string;
  teacherId: string;
  text: string;
  
  student?: User;
  question?: Question;
}