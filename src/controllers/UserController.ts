import { Request, Response } from 'express';
import { User, UserTypes } from '../models/User';

const users: User[] = [];

export default class UserController {
  public create(req: Request, res: Response): Response {
    const { name, email, password} = req.body;
    const user = new User(name, email, password,  UserTypes.student)

    return res.status(200).json(user);
  }

  public update(req: Request, res: Response): Response {
    const { name, email, password} = req.body;
    const user = new User(name, email, password,  UserTypes.student)

    return res.status(200).json(user);
  }

  public list(req: Request, res: Response): Response {
    const { name, email, password} = req.body;
    const user = new User(name, email, password,  UserTypes.student)

    return res.status(200).json(users);
  }

  public delete(req: Request, res: Response): Response {
    const { name, email, password} = req.body;
    const user = new User(name, email, password,  UserTypes.student)

    return res.status(200).json(user);
  }
}