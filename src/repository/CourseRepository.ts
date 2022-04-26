import CoursesOutDTO from "../dto/CoursesOutDTO";
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

  public async getAllCourses(offset = 0, take = 5): Promise<CoursesOutDTO>{
    const total = await dbConnection.course.count()
    const courses = await dbConnection.course.findMany({
      skip: offset,
      take,
      include: {
        questions: {
          include: {
            ansers: true,
            student: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        teacher: {
          select: {
            id: true,
            name: true,
          }
        }
      },
      orderBy: {
        title: 'asc'
      }
    });

    return {
      total,
      offset,
      take,
      courses
    }
  }

  public async delete(id: string): Promise<void>{
    await dbConnection.course.delete({
      where: {
        id: id
      }
    });
  }
  
  public async getCourseByQuestionId(questionId: string): Promise<Course | null> {
    return await dbConnection.course.findFirst({
      where: {
        questions: {
          some: {
            id: questionId
          }
        }
      }
    })
  }

  public async getCoursesByTeacherId(id: string, offset = 0, take = 5): Promise<CoursesOutDTO> {
    const total = await dbConnection.course.count({
      where: {
        teacherId: id
      }
    })
    const courses =  await dbConnection.course.findMany({
      skip: offset,
      take,
      where: {
        teacherId: id
      },
      include: {
        questions: {
          include: {
            ansers: true
          }
        },
        teacher: {
          select: {
            id: true,
            name: true,
          }
        }
      },
      orderBy: {
        title: 'asc'
      }
    })

    return {
      total,
      offset,
      take,
      courses
    }
  }
}