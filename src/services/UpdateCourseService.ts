import Course from "../models/Course";
import { UserTypes } from "../models/enums/UserTypes";
import CourseRepository from "../repository/CourseRepository";
import UserRepository from "../repository/UserRepository";

interface Request {
  id: string,
  title: string, 
  teacherId: string, 
  durationInMinutes: number
  userAuth: {
    userType: UserTypes
  }
}

export default class UpdateCourseService {
  public async execute({id, title, teacherId, durationInMinutes, userAuth}: Request): Promise<Course> {
    const courseRepository = new CourseRepository();

    if(userAuth.userType != UserTypes.Adm && userAuth.userType != UserTypes.Teacher) 
      throw new Error("Operação não autorizada");

    const courseCreated = await courseRepository.update({id, title, teacherId, durationInMinutes});
    return courseCreated;
  }
}