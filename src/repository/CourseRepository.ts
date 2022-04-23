import Course from "../models/Course";
import dbConnection from "./dbConnection";

export default class CourseRepository {
  public async create(courseData: Course): Promise<Course> {
    const courseCreated = await dbConnection.course.create({
      data: {
        title: courseData.title,
        durationInMinutes: courseData.durationInMinutes,
        teacherId: courseData.teacherId
      }
    })
    
    
    return courseCreated;
  }

  public async update(courseData: Course): Promise<Course>{
    const courseUpdated = await dbConnection.course.update({
      where: {
        id: courseData.id
      },
      data: {
        title: courseData.title,
        durationInMinutes: courseData.durationInMinutes,
        teacherId: courseData.teacherId
      }
    });

    return courseUpdated;
  }

  public async getAllCourses(): Promise<Course[]>{
    return await dbConnection.course.findMany();
  }

  public async delete(id: string): Promise<void>{
    await dbConnection.course.delete({
      where: {
        id: id
      }
    });
  }
}