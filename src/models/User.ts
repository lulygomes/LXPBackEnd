import Answer from "./Answer";
import Course from "./Course";
import { UserTypes } from "./enums/UserTypes";
import Question from "./Question";

export default class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  userType: UserTypes;
  created_at?: Date;
  updated_at?: Date;

  courses?:   Course[]
  questions?: Question[]
  answers?:   Answer[]
}
