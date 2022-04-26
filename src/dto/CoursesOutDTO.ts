export default interface CoursesOutDTO {
  total: number,
  offset: number,
  take: number,
  courses: {
    id?: string;
    title: string;
    teacherId: string;
    durationInMinutes: number;
    teacher?: {
      id: string,
      name: string,
    };
    questions?: {
      courseId: string;
      studentId: string;
      text: string;
      open?: boolean;
    }[];
  }[]
}