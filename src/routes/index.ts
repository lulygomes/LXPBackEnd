import { Router } from "express";
import authenticateRoutes from "./AuthenticateRoutes";
import courseRoutes from "./CourseRoutes";
import userRoutes from "./UserRoutes";

const routes = Router();

routes.use('/user',userRoutes)
routes.use('/course', courseRoutes)
routes.use('/session', authenticateRoutes)

export default routes