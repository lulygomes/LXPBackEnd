import AppError from "../errors/AppError";
import Course from "../models/Course";
import { UserTypes } from "../models/enums/UserTypes";
import CourseRepository from "../repository/CourseRepository";
import UserRepository from "../repository/UserRepository";

interface ICourseDataToUpdate {
  id: string,
  title: string, 
  teacherId: string, 
  durationInMinutes: number
}

export default class UpdateCourseService {
  public async execute(courseDataToUpdate: ICourseDataToUpdate): Promise<Course> {
    const courseRepository = new CourseRepository();

    const courseCreated = await courseRepository.update(courseDataToUpdate);
    return courseCreated;
  }
}