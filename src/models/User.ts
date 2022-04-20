import { randomUUID } from "crypto";

export enum UserTypes {
  adm,
  teacher,
  student,
}

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  userType: UserTypes;

  constructor(name: string, email: string, password: string, userType: UserTypes){
    this.id = randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.userType = userType;
  }

}

