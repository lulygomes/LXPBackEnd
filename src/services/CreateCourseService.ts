import AppError from "../errors/AppError";
import Course from "../models/Course";
import { UserTypes } from "../models/enums/UserTypes";
import CourseRepository from "../repository/CourseRepository";
import UserRepository from "../repository/UserRepository";

export default class CreateCourseService {
  public async execute({title, teacherId, durationInMinutes}: Course): Promise<Course> {
    const courseRepository = new CourseRepository();
    const userRepository = new UserRepository();

    const teacherExist = await userRepository.findUserById(teacherId)
    if(!teacherExist || teacherExist.userType != UserTypes.Teacher) throw new AppError("Falha ao criar o curso, informe um professor válido");

    const courseCreated = await courseRepository.create({title, teacherId, durationInMinutes});
    return courseCreated;
  }
}