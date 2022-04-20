import { Router } from "express";
import userRouter from "./UserRouter";

const routes = Router();

routes.use('/user',userRouter)

export default routes