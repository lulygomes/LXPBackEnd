import Question from "./Question";
import User from "./User";

export default class Course {
  id?: string;
  title: string;
  teacherId: string;
  teacher?: User;
  durationInMinutes: number;
  created_at?: Date;
  updated_at?: Date;
  questions?: Question[];
}
