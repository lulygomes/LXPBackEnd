import { Router } from "express";
import TeacherController from "../controllers/TeacherController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const teacherRoutes = Router();

const userController = new TeacherController();

teacherRoutes.use(ensureAuthenticated);
teacherRoutes.post('/',userController.create);
teacherRoutes.get('/courses',userController.list);

export default teacherRoutes;