enum UserTypes {
  Adm = 'adm',
  Teacher = 'teacher',
  Student = 'student',
}
declare namespace Express {
  interface Request {
    token: string,
    user: {
      id: string,
      name: string,
      userType: UserTypes,
    };
  }
}

