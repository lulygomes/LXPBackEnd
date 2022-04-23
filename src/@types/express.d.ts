declare namespace Express {
  interface Request {
    user: {
      id: string,
      userType: 'adm' | 'teacher' | 'student',
    };
  }
}

