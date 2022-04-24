import Course from "./Course";
import User from "./User";

export default class Question {
  id?: string;
  courseId: string;
  studentId: string;
  text: string;
  open?: boolean;
  
  student?: User;
  course?: Course;
}