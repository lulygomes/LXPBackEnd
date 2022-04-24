enum UserTypes {
  Adm = 'adm',
  Teacher = 'teacher',
  Student = 'student',
}
declare namespace Express {
  interface Request {
    user: {
      id: string,
      userType: UserTypes,
    };
  }
}

