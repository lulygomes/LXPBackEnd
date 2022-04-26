import { Router } from "express";
import authenticateRoutes from "./AuthenticateRoutes";
import courseRoutes from "./CourseRoutes";
import teacherRoutes from "./TeacherRoutes";
import userRoutes from "./UserRoutes";

const routes = Router();

routes.use('/user',userRoutes)
routes.use('/teacher',teacherRoutes)
routes.use('/course', courseRoutes)
routes.use('/session', authenticateRoutes)

export default routes