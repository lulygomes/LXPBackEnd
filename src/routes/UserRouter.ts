import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.post('/',userController.create);
userRouter.put('/',userController.update);
userRouter.get('/',userController.list);
userRouter.delete('/',userController.delete);

export default userRouter;