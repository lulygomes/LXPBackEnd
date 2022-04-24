import { Router } from "express";
import CourseController from "../controllers/CourseController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const courseRoutes = Router();

const courseController = new CourseController();

courseRoutes.get('/', courseController.list);

courseRoutes.use(ensureAuthenticated);
courseRoutes.post('/', courseController.crate);
courseRoutes.put('/:id',courseController.update);
courseRoutes.delete('/:id',courseController.delete);

courseRoutes.post('/question',courseController.addQuestion)
courseRoutes.post('/answer',courseController.addAnswer)


export default courseRoutes;