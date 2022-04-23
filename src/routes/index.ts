import { Router } from "express";
import courseRoutes from "./CourseRoutes";
import userRoutes from "./UserRoutes";

const routes = Router();

routes.use('/user',userRoutes)
routes.use('/course', courseRoutes)

export default routes