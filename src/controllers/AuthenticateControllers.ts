import { Response, Request } from "express";
import AuthenticateService from "../services/AuthenticateService";

export default class AuthenticateController {
  public async create(req: Request, res: Response ): Promise<Response>{
    try {
      const authenticateService = new AuthenticateService();
      const {email, password} = req.body;

      const token = await authenticateService.execute({email, password});

      return res.status(200).json(token);
    } catch (error) {
      return res.status(401).json({err: error.message})
    }
  }
  public async refresh(req: Request, res: Response ): Promise<Response>{
    try {
      const user = req.user;
      const token = req.token;

      return res.status(200).json({token, user});
    } catch (error) {
      return res.status(401).json({err: error.message})
    }
  }
}