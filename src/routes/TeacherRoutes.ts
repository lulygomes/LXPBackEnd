import { Router } from "express";
import TeacherController from "../controllers/TeacherController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const teacherRoutes = Router();

const userController = new TeacherController();

teacherRoutes.post('/',userController.create);

teacherRoutes.use(ensureAuthenticated);
teacherRoutes.get('/courses',userController.list);

export default teacherRoutes;