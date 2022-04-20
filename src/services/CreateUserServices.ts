import { User } from "../models/User";

class CreateUserServices {
  public execute({name, email, password, userType}: User): User {

    return new User(name, email,password, userType)
  }
}